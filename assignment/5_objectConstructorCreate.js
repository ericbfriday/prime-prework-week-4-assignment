//Create books again, this time with object constructor syntax
// Write a constructor function to create 'Book' objects with the same
// four properties as above.
// Write the constructor function here:
function Book(title, author, pageCount, haveRead) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.haveRead = haveRead;
}

function createBooksWithConstructor() {
  // In this function, create 3 new 'Book' objects by using the
  // constructor function you wrote above.
  // Write code here:
  var fightClub = new Book("Fight Club","Chuck Palahniuk",208,true);
  var priestdaddy = new Book("Priestdaddy: A Memoir",'Patricia Lockwood',352,true);
  var oldPathWhiteClouds = new Book('Old Path White Clouds','Thich Nhat Hanh',598,true);

  // Store these new books in an array called books.
  // Write code here
var books = [ fightClub , priestdaddy , oldPathWhiteClouds ];
  // return our array of books
  return books;
}
// call createBooksWithConstructor and console log the return
console.log(createBooksWithConstructor());
