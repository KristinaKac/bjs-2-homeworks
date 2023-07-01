class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this._state = 100;
      this.type = null;
    }
    fix() {
      this.state = this.state * 1.5;
    }
    set state(value) {
      if (value < 0) {
        this._state = 0;
      } else if (value > 100) {
        this._state = 100;
      } else {
        this._state = value;
      }
    }
    get state() {
      return this._state;
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
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = 'book';
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'novel';
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'fantastic';
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
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
      const result = this.books.find(item => value == item[type]);
      return result || null;
    }
    giveBookByName(bookName) {
      const book = this.findBookBy("name", bookName);
      if (!book) return null;
      this.books = this.books.filter((item) => item.name !== bookName);
      return book;
    }
  }
  class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
    addMark(mark, subject) {
      if ((mark <= 5) && (mark >= 2)) {
        if (this.marks.hasOwnProperty(subject)) {
          this.marks[subject].push(mark);
        } else {
          this.marks[subject] = [mark];
        }
      }
    }
    getAverageBySubject(subject) {
      if (!this.marks.hasOwnProperty(subject)) {
        return 0;
      } else {
        let sum = this.marks[subject].reduce((currentSum, currentNumber) => currentSum + currentNumber);
        return sum / this.marks[subject].length;
      }
    }
    getAverage() {
      let sum = 0;
      for (let i = 0; i < Object.keys(this.marks).length; i++) {
        sum = sum + this.getAverageBySubject(Object.keys(this.marks)[i]);
      }
      if (sum === 0) {
        return 0;
      }
      let avg = sum / Object.keys(this.marks).length;
      return avg;
    }
  }