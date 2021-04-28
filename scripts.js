document.body.appendChild(document.createElement('ul'));
const ul = document.querySelector('ul');
let maxNum = null;

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

function renderCatalog(catalogArray) {
  ul.innerHTML = catalogArray
    .map(
      item => `<li>
${item.name} - ${item.price}
  </li>`,
    )
    .join('');
}
renderCatalog(catalog);

function filterProductsByMaxPrice(products, maxPrice) {
  return products.filter(product => product.price.slice(1) <= maxPrice);
}

document
  .querySelector('input[type="range"]')
  .addEventListener('input', event => {
    maxNum = event.target.value;
    console.log(maxNum);
    const filteredCatalog = filterProductsByMaxPrice(catalog, Number(maxNum));
    renderCatalog(filteredCatalog);
  });
