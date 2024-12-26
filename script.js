const cart = [];
const products = [
    { id: 1, name: 'Product 1', price: 25.00 },
    { id: 2, name: 'Product 2', price: 50.00 },
    { id: 3, name: 'Product 3', price: 35.00 },
    { id: 4, name: 'Product 4', price: 40.00 }
];

const cartCountElement = document.getElementById('cart-count');
const cartPopup = document.getElementById('cart-popup');
const cartListElement = document.getElementById('cart-list');
const totalPriceElement = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout-btn');
const closeCartBtn = document.getElementById('close-cart');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productId = parseInt(event.target.closest('.product-card').dataset.id);
        const product = products.find(p => p.id === productId);

        if (product) {
            cart.push(product);
            updateCart();
        }
    });
});

cartCountElement.addEventListener('click', () => {
    cartPopup.style.display = 'flex';
});

closeCartBtn.addEventListener('click', () => {
    cartPopup.style.display = 'none';
});

checkoutBtn.addEventListener('click', () => {
    alert('Proceeding to checkout');
    cart.length = 0;
    updateCart();
    cartPopup.style.display = 'none';
});

function updateCart() {
    cartCountElement.textContent = cart.length;
    cartListElement.innerHTML = '';

    let totalPrice = 0;
    cart.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        cartListElement.appendChild(listItem);
        totalPrice += product.price;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}
