// 5 Products
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphone", price: 2000 },
  { id: 4, name: "Keyboard", price: 1500 },
  { id: 5, name: "Mouse", price: 800 }
];

// Cart Array
let cart = [];

// ADD TO CART
function addToCart(productId) {
  const product = products.find((item) => item.id === productId);

  const existingProduct = cart.find((item) => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  console.log("Product Added");
  console.log(cart);
}

// UPDATE QUANTITY
function updateCart(productId, newQuantity) {
  const product = cart.find((item) => item.id === productId);

  if (product) {
    product.quantity = newQuantity;
  }

  console.log("Cart Updated");
  console.log(cart);
}

// REMOVE FROM CART
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);

  console.log("Product Removed");
  console.log(cart);
}

// --------------------
// FUNCTION CALLS
// --------------------

addToCart(1);
addToCart(2);
addToCart(1);

updateCart(2, 3);

removeFromCart(1);