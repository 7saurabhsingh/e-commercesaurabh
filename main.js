let card = document.querySelectorAll('.add-cart');

let products = {
    {
        name: 'rose',
        tag: 'flower',
        price:15,000,
        incart:0
    },    
    
    {
        name: 'Sunflower',
        tag: 'flower',
        price:15,000,
        incart:0
    },
    
    {
        name: 'Lily',
        tag: 'flower',
        price:15,000,
        incart:0
    },
    {
        name: 'Gulab',
        tag: 'flower',
        price:15,000,
        incart:0
    },
    
for (let i=0; i < carts.length; i++) {
    cart[i].addEventListener('click', () =>{
        cartNumbers();

    })
}
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumber() {
    let productNumbers = localStorage.getItem('cartNumber');

    productNumber = parseInt(productNumbers);


    if(productNumbers) {
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else{
        localStorage.setItem('cartNumber', 1);
        document.querySelector('.cart span').textContent = 1;
    }
}

onLoadCartnumber();