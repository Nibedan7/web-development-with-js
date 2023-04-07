function filterByCategory(products) {
  return function(category) {
    return products.filter(product => product.category === category);
  }
}
const products = [
  { name: 'Product 1', category: 'Category 1' },
  { name: 'Product 2', category: 'Category 2' },
  { name: 'Product 3', category: 'Category 1' },
  { name: 'Product 4', category: 'Category 2' },
  { name: 'Product 5', category: 'Category 3' },
];

const filterByCategoryFn = filterByCategory(products);

const category1Products = filterByCategoryFn('Category 1');
console.log(category1Products);
// Output: [{ name: 'Product 1', category: 'Category 1' }, { name: 'Product 3', category: 'Category 1' }]

const category2Products = filterByCategoryFn('Category 2');
console.log(category2Products);
// Output: [{ name: 'Product 2', category: 'Category 2' }, { name: 'Product 4', category: 'Category 2' }]

const category3Products = filterByCategoryFn('Category 3');
console.log(category3Products);
// Output: [{ name: 'Product 5', category: 'Category 3' }]
