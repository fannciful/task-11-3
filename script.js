'use strict'

const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg'
];


const randomIndex = Math.floor(Math.random() * images.length);
const randomImg = images[randomIndex];

const imgElement = document.createElement('img');
imgElement.src = `img/${randomImg}`;

document.querySelector('.image-container').appendChild(imgElement);