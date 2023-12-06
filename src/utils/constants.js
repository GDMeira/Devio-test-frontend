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
