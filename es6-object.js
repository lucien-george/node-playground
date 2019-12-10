const name = "lucien";
const userAge = 23;

const user = {
  name, // shorthand syntax (comes from name variable)
  age: userAge, // can't user shorthand syntax because we don't have an age variable
  location: 'London'
};

console.log(user);

// Object destructuring

const product = {
  label: 'red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
};

// const label = product.label;
// const stock = product.stock;

// base destructing
// const { label, stock } = product; // destructuring product object.
// console.log(label, stock);

// destructuring with new variable names
// const { label:productLabel, stock, rating = 5 } = product; // destructuring product object.
// console.log(productLabel, stock, rating); // default value on rating will be used only if rating is undefined

const transaction = (type, { label, stock = 0 } = {}) => { // destructuring onject in the parameters directly
  console.log(label, stock);
};

transaction('order', product);
transaction('order');
