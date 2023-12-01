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
