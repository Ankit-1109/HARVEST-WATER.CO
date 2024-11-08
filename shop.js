// Cart functionality
let cart = [];

// Add item to cart with price
function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

// Update cart display and total price
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalPriceElement = document.getElementById('total-price');
    
    // Update cart item count
    cartCount.innerText = cart.length;
    
    // Display items in the cart
    if (cart.length === 0) {
        cartItems.innerHTML = "<p>No items in cart.</p>";
        totalPriceElement.innerText = "Total: $0";
    } else {
        cartItems.innerHTML = cart.map(item => `<p>${item.product} - $${item.price}</p>`).join('');
        
        // Calculate total price
        const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
        totalPriceElement.innerText = `Total: $${totalPrice}`;
    }
}

// Toggle cart popup display
function toggleCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
}

// Clear cart items
function clearCart() {
    cart = [];
    updateCart();
    toggleCart();
}
