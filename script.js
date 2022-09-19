// var titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles));

// console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(function(items){
//     console.log(items);
// })

// Using Vanilla JavaScript

// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// // console.log(wmf)

// var books = document.querySelectorAll('#book-list li .name')
// // console.log(books)

// Array.from(books).forEach(function(book){
//     // console.log(book)
// })

// var books = document.querySelectorAll('#book-list li .name')
// Array.from(books).forEach(function(book){
//     book.textContent += ' (The Glory of God)'
// })

// const bookList = document.querySelector('#book-list');
// // bookList.innerHTML = '<h2> Books and more books....</h2>'
// bookList.innerHTML += '<p> This is how you write HTML<p>'

// const banner = document.querySelector("#page-banner")
// console.log('#page-banner node type is:', banner.nodeType)
// console.log('#page-banner node name is:', banner.nodeName)
// console.log('#page-banner has child nodes:', banner.hasChildNodes())

// const cloneBanner = banner.cloneNode(true);
// console.log(cloneBanner);

// const bookList = document.querySelector('#book-list');
// console.log('the parent node is:', bookList.parentNode)
// console.log('the parent element is:', bookList.parentElement)

// console.log(bookList.children)

// const bookList = document.querySelector('#book-list');

// console.log('book-list next element sibling:', bookList.nextElementSibling)
// console.log('book-list previous element sibling:', bookList.previousElementSibling)
// bookList.previousElementSibling.querySelector('p').innerHTML += '<br/> Too cool for everyone else!'

// var btns = document.querySelectorAll('#book-list .delete');
// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li);
//     })
// })

const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})














