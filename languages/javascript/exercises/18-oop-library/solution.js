class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    
    getDetails() {
        return `${this.title} by ${this.author}`;
    }
}

class DigitalBook extends Book {
    constructor(title, author, fileSize) {
        super(title, author);
        this.fileSize = fileSize;
    }
    
    getDetails() {
        return `${super.getDetails()} - ${this.fileSize}MB`;
    }
}

const myBook = new Book('1984', 'George Orwell');
console.log(myBook.getDetails());

const myEbook = new DigitalBook('Dune', 'Frank Herbert', 2);
console.log(myEbook.getDetails());
