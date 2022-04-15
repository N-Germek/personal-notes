'use strict';

const objectProfile = document.getElementById('objectProfile');
console.log(objectProfile);

// Adding Elements to the DOM

// 1. create an element
let art = document.createElement('article');
//  let variableOne = document.createElementById('html id name');
//  let variableTwo = document.createElemebt(html element);

// 2. give that element content
// 3. append that element
objectProfile.appendChild(art);

// *** keep an eye on where you append because that is where it goes in your DOM.

// add a headline
let header = document.createElement('h3');
art.appendChild(header);
header.textContent = 'secondObject';

// add a p tag
let p = document.createElement('p');
p.textContent = 'here is additional information in my p-tag';
art.appendChild(header);

// add an image
let image = document.createElement('img');
image.src = 'images/ragdollKitten.jpeg';
image.alt = 'cute ragdoll kitten.';
image.setAttribute('height', 184);
image.setAttribute('width', 275);
art.appendChild(image);
