// Cart Functionality
let cart = any[];

function addToCart(product) {
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    if (cart.length === 0) {
        cartItems.innerHTML = "<p>No items in cart.</p>";
    } else {
        cartItems.innerHTML = cart.map(item => `<p>${item}</p>`).join('');
    }
}
// Cart Functionality
let cart = any[];

// Add item to cart
function addToCart(product) {
    cart.push(product);
    updateCart();
}

// Update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>No items in cart.</p>";
    } else {
        cartItems.innerHTML = cart.map(item => `<p>${item}</p>`).join('');
    }
}

// Show/hide cart popup
function toggleCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
}

// Clear cart
function clearCart() {
    cart = [];
    updateCart();
    toggleCart();
}
