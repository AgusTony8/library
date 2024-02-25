//Temporary memory of the books i keep
const myLibrary = [];

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

// constructor test
let booki = new Book("The Hobbit", "J.R.R. Tolkien", 295, false) 
console.log(booki.info())



//web book constructor
function addBookToLibrary() {

}


document.getElementById('bookForm').addEventListener('submit', function (event) {
    // Agrega aquí la lógica para manejar el envío del formulario
    event.preventDefault();
    // Puedes cerrar el modal o realizar otras acciones según tu necesidad
});
