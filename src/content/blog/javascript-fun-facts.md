---
title: 'JavaScript Fun Facts'
summary: 'How HTML, CSS, and JavaScript hang together, with detours through Conan Exiles, my kids, the DOM as a magic table of contents, grocery lists, and art galleries.'
published: '2026-04-10'
tags: ['javascript', 'fundamentals', 'dom', 'foundations']
---

## How HTML, CSS, and JavaScript work together

It's like when you're playing a survival game like Conan Exiles: you start with nothing but a set of underwear (literally, sometimes not even that, lol). You need to make tools so you can hunt: an axe to cut down trees, a pick to mine rock, a bow to hunt. You need to harvest animals for food and fur to clothe yourself and eat. You need wood and stone to build your house, and cloth and wood and metal to decorate it. By the end you're level 100, living in a stone castle on the top of a hill, lording it over everyone else and laughing.

How this connects:

**HTML** is the building block: you create your structure. **CSS** is the style and decorating: you make everything pretty. **JavaScript** is the action: it makes everything possible.

Without one, the other two don't work. They need each other to function well.

## Control flow and loops

**Loop:** my kids come and tell me the same thing over and over until I say "enough" or kick them out of the room. That's a loop. It repeats until a condition is met.

**Control flow (if/else):** if the kids have done their homework, they get an hour of tech time while I make dinner. If they haven't, no tech time: they sit at the table and do homework before we eat. That's control flow. The outcome changes depending on whether a condition is true or false.

```js
function displayProducts() {
  let productNames = Object.keys(products)
  for (let i = 0; i < productNames.length; i++) {
    let productName = productNames[i]
    document.getElementById(productName).innerHTML =
      productName + ': ' + products[productName].stock
  }
}
```

## The DOM

The DOM, to me, is sort of like the table of contents of a book. Each book has chapters and a page count; the table of contents tells you where the start of each chapter is. Some books even have an index that lets you find specifically mentioned items, look them up, and gather information from them. This is most noticeable in history books.

The key difference is that in the DOM, you can *change* things around, kind of like a magic book that you can reach into and pull out the information you're looking for, and change it if you need to. I saw this today when I used `document.getElementById` to find elements on the page and `innerHTML` to change what they displayed.

## Arrays and objects

**Array:** like a grocery shopping list. You go through it top to bottom, item by item, in order. You access things by their position: first item, second item, third item.

**Object:** like online shopping. You jump straight to the page you want by searching for it by name. You don't need to know what order it's in; you just look it up directly. And each page has related info grouped together (like price, description, stock).

```js
let products = {
  whiteCoffee: {
    stock: 7,
    price: 3.5,
  },
}
```

```js
let customer = {
  order: [],
}
```

## Functions

The function is the canvas: the structure that holds everything together. The data/object is your medium: the paint, the resin, the materials you're working with. Displaying it is hanging it in the gallery, putting it where people can see it. And calling the function is the customer walking in and buying it: that's the moment it all happens.

Functions are a reusable block of code. Once you create it, you don't need to recreate it again. This is useful because it makes building the code less time-consuming.
