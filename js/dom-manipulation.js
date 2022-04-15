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

// add a ul
let ul = document.createElement('ul');
art.appendChild(ul);

// add an image
let image = document.createElement('img');
image.src = 'images/ragdollKitten.jpeg';
image.alt = 'cute ragdoll kitten.';
image.setAttribute('height', 184);
image.setAttribute('width', 275);
art.appendChild(image);

// to locate the first item in an h2 heading.. same can be used for all other tags
document.querySelector('h2');

//to locate a specific item through the DOM:
document.querySelector('article:nth-child(2) h2');

// proper render function with an array.
let jumper = {
    name: 'Jumper',
    likes: ['cuddling', 'lazer pointer', 'catnip']
    render: function () {
        for (let i = 0; i < this.likes.length; i++) {
        let li = document.createElement('li');
        li.textContent = `${this.name} likes ${this.likes[i]}`;
        ul.appendChild('li');
        }
    }
};
// this is the last step aka calling our method.
jumper.render();
