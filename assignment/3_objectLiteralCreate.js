// Create books with object literal syntax
function threeBooks() {
  // Create 3 book objects with object literal syntax. Books should have
  // properties for title, author, and pageCount.
  // Write code here:
  var fightClub = {
    title: "Fight Club",
    author: 'Chuck Palahniuk',
    pageCount: 208
  };
  var priestdaddy = {
    title: "Priestdaddy: A Memoir",
    author: 'Patricia Lockwood',
    pageCount: 352
  };
  var oldPathWhiteClouds = {
    title: 'Old Path White Clouds',
    author: 'Thich Nhat Hanh',
    pageCount: 598
  };
  // Add a property of haveRead to each book object you created. This should
  // be set to true or false.
  // Write code here:
//  var haveRead = new threeBooks();
  fightClub.haveRead = true;
  priestdaddy.haveRead = true;
  oldPathWhiteClouds.haveRead = true;
  // Store these objects in an array called books.
  // Write code here:
var books = [ fightClub , priestdaddy , oldPathWhiteClouds ];
  // return this array
  return books;
}

// call threeBooks and console log the return
console.log(threeBooks());
