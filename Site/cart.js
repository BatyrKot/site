
let cartItems = [];

function addToCart(event) {
    // Получить данные товара из атрибутов кнопки
    const product = event.target.getAttribute('data-product');
    const price = event.target.getAttribute('data-price');

    // Добавить товар в массив корзины
    cartItems.push({ product, price });

    // Обновить отображение количества товаров в корзине
    updateCartCount();

    // Отменить действие по умолчанию (переход по ссылке)
    event.preventDefault();
}

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});


function updateCartCount() {
    const cartCount = document.querySelector('#cart-count');
    cartCount.textContent = cartItems.length;
}
