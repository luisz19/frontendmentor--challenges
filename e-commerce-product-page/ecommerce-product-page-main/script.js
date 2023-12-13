const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const btnBuy = document.getElementById('btnBuy');
const btnExit = document.getElementById('exit');
const cartScreen = document.getElementById('cart-screen');

//functions counter
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
//functions counter

//functions cart screen
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
//functions cart screen

// functions images
const btnImg1 = document.getElementById('radio1');
const btnImg2 = document.getElementById('radio2');
const btnImg3 = document.getElementById('radio3');
const btnImg4 = document.getElementById('radio4');

btnImg1.addEventListener('click', function (){
    document.getElementById('img-change').src="images/image-product-1.jpg"
})

btnImg2.addEventListener('click', function (){
    document.getElementById('img-change').src="images/image-product-2.jpg"
})

btnImg3.addEventListener('click', function (){
    document.getElementById('img-change').src="images/image-product-3.jpg"
})

btnImg4.addEventListener('click', function (){
    document.getElementById('img-change').src="images/image-product-4.jpg"
})

// functions images

const hamburger = document.getElementById('btn-menu');
const header = document.getElementById('header');

hamburger.addEventListener('click', function () {
    if(header.style.height === '60px'){
        header.style.height = '140px';
    }
    else {
        header.style.height = '60px';
    }
});
