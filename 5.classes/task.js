class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
        if (this.state > 100) {
            this.state = 100;
        } else if (this.state < 0) {
            this.state = 0;
        }
    }
    set setState(state) {
        if (state < 0) {
            this.state = 0;
        } else if (state > 100) {
            this.state = 100;
        } else {
            this.state = state;
        }
    }
    get getState() {
        return this.state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state >= 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (value == this.books[i][type]) {
                return this.books[i];
            }
        } return null;
    }
    giveBookByName(bookName) {
        let book;
        for (let i = 0; i < this.books.length; i++) {
            if (bookName == this.books[i].name) {
                book = this.books[i];
                this.books = this.books.filter((number) => number != book);
                return book;
            }
        } return null;
    }
}