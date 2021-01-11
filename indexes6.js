console.log("ES6 version")

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

// Add Display
class Display {
    add(book) {       //book object
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr class="table-dark">
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                            </tr>`
        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm')
        libraryForm.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }

    show(type, displayMessage) {
        let message = document.getElementById('message')
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>message: </strong> ${displayMessage}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`
        setTimeout(() => {
            message.innerHTML = ''
        }, 1000);
    }
}

// Submit event Listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit)

function libraryFormSubmit(e) {
    console.log("submission done")
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type)
    console.log(book)

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);  //method
        display.clear();
        display.show('success', 'Book added Successfully')
    }
    else {
        // show error to user
        display.show('danger', 'You can not add this book')
    }
    e.preventDefault(); // to stop from reloading the page

}

class library{
    constructor(booklist)
    {
        this.booklist = booklist;
        this.issuedBook = {};
    }

    getBooklist(){
        this.booklist.forEach(element => {
            console.log(element)
        });
    }

    issueBook(bookname, user){
        // console.log(this.issuedBook[bookname])
        if(this.issuedBook[bookname] == undefined)
        {
            this.issuedBook[bookname] = user
        }
        else{
            console.log("book is already Issued");
        }
       
    }

    returnBook(bookname){
        delete this.issuedBook[bookname];
    }
}