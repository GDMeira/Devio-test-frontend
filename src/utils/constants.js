export const productCategories = {
  burguers: 'lanches',
  desserts: 'sobremesas',
  drinks: 'bebidas',
  sideDishes: 'acompanhamentos',
};

export const productTypes = {
  burguer: 'lanche',
  dessert: 'sobremesa',
  drink: 'bebida',
  sideDishe: 'acompanhamento',
};

export const paymentMethods = {
  creditCard: 'Crédito',
  debitCard: 'Débito',
  cash: 'Dinheiro',
};

export const enumPaidWith = {
  creditCard: 'CREDITCARD',
  debitCard: 'DEBITCARD',
  cash: 'CASH',
};

export const bgColors = ['#FA6767', '#125C13', '#FFEB70'];

function productContains(product, nameOrId) {
  let contain = false;

  if (product.name.includes(nameOrId)) contain = true;
  if (product.id.toString().includes(nameOrId)) contain = true;

  return contain;
}

export function filterProducts(data, filters) {
  const response = [];
  const keys = Object.keys(data);

  if (filters.nameOrId.length > 0) {
    keys.forEach((key) => {
      data[key].forEach((product) => {
        if (productContains(product, filters.nameOrId)) {
          response.push(product);
        }
      });
    });

    return response;
  }

  if (filters.category.length > 0) return data[filters.category];

  keys.forEach((key) => {
    response.push(...data[key].slice(0, 4));
  });

  return response;
}

export const productTypeEnumToAtrrs = {
  BURGUER: 'burguers',
  DRINK: 'drinks',
  DESSERT: 'desserts',
  SIDEDISHE: 'sideDishes',
};

export function calculateOrderPrice(itens) {
  let totalPrice = 0;

  itens.forEach((item) => {
    totalPrice += item.quantity * (item.product.price - item.product.discount);

    if (item.extras.length > 0) {
      item.extras.forEach((extra) => {
        totalPrice += item.quantity * (extra.price - extra.discount);
      });
    }
  });

  return totalPrice;
}

export function centsToReal(num) {
  return (num / 100).toFixed(2).replace('.', ',');
}

export function realToCents(value) {
  const radix = 10;

  return parseInt((value.replace('R$ ', '')).replace(',', ''), radix);
}

function connectPrinter() {
  let ePosDev = new window.epson.ePOSDevice();
  ePosDevice.current = ePosDev;
  printerIPAddress = import.meta.env.VITE_PRINTER_IP;
  printerPort = import.meta.env.VITE_PRINTER_PORT;

  ePosDev.connect(printerIPAddress, printerPort, (data) => {
    if (data === "OK") {
      ePosDev.createDevice(
        "local_printer",
        ePosDev.DEVICE_TYPE_PRINTER,
        { crypto: true, buffer: false },
        (devobj, retcode) => {
          if (retcode === "OK") {
            printer.current = devobj;
            setConnectionStatus(STATUS_CONNECTED);
          } else {
            throw retcode;
          }
        }
      );
    } else {
      throw data;
    }
  });
}

function printText(text) {
  let prn = printer.current;
  if (!prn) {
    return;
  }

  prn.addText(text);
  prn.addFeedLine(5);
  prn.addCut(prn.CUT_FEED);

  prn.send();
}

export function thermalPrint(order, itens, code, totalPrice) {
  connectPrinter();

  const text = `${order.clientName} Code: ${code}\h
  Preço total: ${centsToReal(totalPrice)}\h
  ***********************************
  ${itens.map(item => `${item.quantity}x ${item.product.name} ${centsToReal(item.product.price - item.product.discount)}
    ${item.extras.length > 0 && item.extras.map(extra => `
      \h\t${item.quantity}x ${extra.name} ${centsToReal(extra.price - extra.discount)}
    `).join('')}
  `).join('\h')}
  `;

  printText(text);
}
