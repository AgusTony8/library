//Temporary memory of the books i keep
var myLibrary = [
    new Book("Book1", "Author1", 200, false),
    new Book("Book2", "Author2", 150, true),
];

//book constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () =>{
        readTxt = read ? " read" : "not read yet";
        
        return ("This is the " + title + " made by " + author + ", with "
                + pages.toString() + " pages and is " +readTxt) 
    }
}


function clearLibrary(){
    var container = document.getElementById("library");
    container.innerHTML = ''
}

//web book constructor
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);

    var container = document.getElementById("library");
    
    //clears the library contents
    clearLibrary();
    
    
    // Loop through the myLibrary array
    myLibrary.forEach(function(book) {
        // Create the div element with class "aBook"
        var my_div = document.createElement("div");
        my_div.classList.add("aBook");

        // Create and set the h1 element for the title
        var titleElement = document.createElement("h1");
        titleElement.textContent = book.title;
        titleElement.id = "bTitle";

        // Create and set the p element for the author
        var authorElement = document.createElement("p");
        authorElement.textContent = book.author;
        authorElement.id = "bAuthor";

        // Create and set the p element for the pages
        var pagesElement = document.createElement("p");
        pagesElement.textContent = book.pages + " pages";
        pagesElement.id = "bPages";

        // Create and set the button element for isRead
        var readButton = document.createElement("button");
        readButton.id = "bRead";
        readButton.textContent = book.read ? "Read" : "Not Read";
        readButton.classList.add(book.read ? "yes" : "no")

        // Append the elements to the div
        my_div.appendChild(titleElement);
        my_div.appendChild(authorElement);
        my_div.appendChild(pagesElement);
        my_div.appendChild(readButton);

        // Append the div to the container
        container.appendChild(my_div);
    });


}


document.getElementById('bookForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var form = document.getElementById("bookForm");
    var modalContent = document.querySelector('.modal-content');
    var modal = document.getElementById('modal');
        

    // Accessing individual input values
    var bkTitle = form.elements.title.value;
    var bkAuthor = form.elements.author.value;
    var bkPages = form.elements.pages.value;
    var bkRead = form.elements.isRead.value == 'YES' ? true : false;
    let newBook = new Book(bkTitle, bkAuthor, bkPages, bkRead)
    
    //calls to add a new book to the library
    addBookToLibrary(newBook);

    //closes form
    modalContent.classList.remove('show');
    modal.style.display = 'none';

});


