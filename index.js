var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}
  let price = getRandomInt(1, 100);
  let name = item;
  const stuffINeed = Object.assign({itemName: name, itemPrice: price}, item);
  cart.push(stuffINeed);
  return name + ` has been added to your cart.`;
}

function viewCart() {
    var text = `In your cart, you have `;
    var i = 0;
    if (cart.length === 0) {
    return `Your shopping cart is empty.`;
    } else if (cart.length === 1) {
         text += cart[0].itemName + ` at $` + cart[0].itemPrice + `.`;
        } else if (cart.length > 1) {
          for (let i = 0; i < cart.length; i++) {   
          if (i === cart.length -1) {
              text += `and ` + cart[i].itemName + ` at $` + cart[i].itemPrice + `.`;
        } else {
              text += cart[i].itemName + ` at $` + cart[i].itemPrice + `, `; 
        }
      }
    }
  return text;
}

function total() {
  var allPrices = 0;
  for (let i = 0; i < cart.length; i++) {
    allPrices += (cart[i].itemPrice);
  }
  return allPrices;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
