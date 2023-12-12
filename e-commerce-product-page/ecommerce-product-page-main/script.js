const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const btnBuy = document.getElementById('btnBuy');
const btnExit = document.getElementById('exit');
const cartScreen = document.getElementById('cart-screen');

let count = 0;
let intervalId = null;

const updateValue = () => {
    value.innerHTML = count;
}

const startInterval = (operation) => {
    intervalId = setInterval(() => {
        operation();
        updateValue();
    }, 100);
};

const stopInterval = () => {
    clearInterval(intervalId);
};

plusButton.addEventListener('mousedown', () => {
    startInterval(() => {
        count += 1;
    });
});

minusButton.addEventListener('mousedown', () => {
    startInterval(() => {
        count -= 1;
    });
});

document.addEventListener('mouseup', stopInterval);

btnBuy.addEventListener('click', function () {
    if (cartScreen.style.display === 'none' || cartScreen.style.display === '') {
        cartScreen.style.display = 'block';
    } else {
        cartScreen.style.display = 'none';
    }
});

btnExit.addEventListener('click', function () {
    if (cartScreen.style.display === 'block') {
        cartScreen.style.display = 'none';
    }
});
