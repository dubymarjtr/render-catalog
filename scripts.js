const ul = document.querySelector('ul');
let maxNum = null;
const checked = document.querySelector('#stock');

const catalog = [
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },

  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
];
/* function declaration */
function renderCatalog(catalogArray) {
  ul.innerHTML = catalogArray
    .map(
      item => `<li>
${item.name} - ${item.price}
  </li>`,
    )
    .join('');
}

function filterProductsByMaxPrice(products, maxPrice) {
  return products.filter(product => product.price.slice(1) <= maxPrice);
}

function filterByStock(products) {
  return products.filter(product => product.stocked === true);
}

function filterBySearch(products, search) {
  return products.filter(product => product.name.includes(search) === true);
}

renderCatalog(catalog);

/* business logic */
document
  .querySelector('input[type="range"]')
  .addEventListener('input', event => {
    maxNum = event.target.value;
    const filteredCatalog = filterProductsByMaxPrice(catalog, Number(maxNum));
    renderCatalog(filteredCatalog);
  });

document
  .querySelector('input[type="checkbox"]')
  .addEventListener('change', () => {
    if (checked) {
      const stockedCatalog = filterByStock(catalog);
      renderCatalog(stockedCatalog);
    } else {
      renderCatalog(catalog);
    }
  });

document.querySelector('#search').addEventListener('input', event => {
  const search = event.target.value;
  renderCatalog(filterBySearch(catalog, search));
});
