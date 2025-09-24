// Esports Arena catalog (price per unit)
const products = [
    { id: 201, name: "Pro Mouse (wired)", category: "gear", price: 29.99},
    { id: 202, name: "Team Jersey",         category: "apparel", price: 49.5  },
    { id: 203, name: "Energy Drink 6-pack", category: "snacks",  price: 12.0  },
    { id: 204, name: "Arena Day Pass",      category: "access",  price: 15.0  },
    { id: 205, name: "Switchable Keycaps",  category: "gear",    price: 19.0  }
];

// Example cart (product & quantity)
const cart = [
  { productId: 202, qty: 1 },
  { productId: 203, qty: 2 },
  { productId: 204, qty: 1 },
  { productId: 205, qty: 1 }
];

// Try: "regular", "student", "member", or "vip"
const customerType = "member";

// Task1: getCategoryDiscount(category)

function getCategoryDiscount(category) {
    
    if category == "gear"
    return discountedprice = 0.10

};

function getCategoryDiscount(category) {

    if category == "apparel"
    return discountedprice = 0.15

};

function getCategoryDiscount(category) {

    if category == "snacks"
    return discountedprice = 0.08

};

function getCategoryDiscount(category) {

    if category == "access"
    return discountedprice = 0.05

};

function getCategoryDiscount(category) {

    if category == "default"
    return discountedprice = 0

};

// Task 2: priceAfterCategoryDiscount(product)

function priceAfterCategoryDiscount(product) {
    rate = getCategoryDiscount(product.category)
    return product.price * (1 - rate)

};

// Task 3: findProductById(id)

function findProductById(id) {

    for (let product of products) {
        if (product.id == id) {
            return product
        } else {
            return null
        }
        
    }
}

// Task 4: lineItemTotal(cartItem)

function lineItemTotal(cartItem) {
    
}
