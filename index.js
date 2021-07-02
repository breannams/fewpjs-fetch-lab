function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
// fetch('https://anapioficeandfire.com/api/books') .then(function(response){
//     return response.json();})
//     .then(renderBooks(json));
//     return fetch('https://anapioficeandfire.com/api/books') 
    

    // fetch("string representing a URL to a data source") .then(function(response) {
    //   return response.json();
    // }) .then(function(json){
    //   // Use this data inside of `json` to do DOM manipulation
    // }) 

    return fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => renderBooks(json));
  }

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
