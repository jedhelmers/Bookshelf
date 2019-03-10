import React, { Component } from 'react'
import Book from './Book'
import Aux from './hoc/Aux'
import * as booksAPI from './BooksAPI.js'


class Bookshelf extends Component<Props> {
  state = {
    books: [],
    shelves: ['read', 'wantToRead', 'currentlyReading']

  }

  componentDidMount() {
    this.fetchBooksFromDB()
    booksAPI.getAll().then(books => {
      this.setState({
        books: books,
     })
    })
  }

  fetchBooksFromDB() {
    booksAPI.getAll().then((books) => {

        // sift and reformat data before storing it into state
        // const books = formatData(booksAPIData)
        this.setState({ books:[...books] });
    })
  }


  moveBook(book, newShelf, response){
    // handles adding a book to DB,
    //  as well as moving existing book to different shelf
    // console.log(book, newShelf, response);
    console.log(response[newShelf].indexOf(book.id))
    // Verify book was updated to newShelf in DB, before updating our state
    if (response[newShelf].indexOf(book.id) !== -1) {

      book.shelf = newShelf;
      // remove book, then add it back to array, with its new shelf value
      this.setState((prevState) => (
        {
          books: prevState.books
          .filter((aBook) => (aBook.id !== book.id))
          .concat([book])    // `concat([]) returns a new array, for chaining
        }
      ))

    }
  }

  changeShelfHandler(book, newShelf) {
    // update database
    booksAPI.update(book, newShelf)
      .then((response) => {

        // then update state
        if (newShelf === 'none') {
          this.deleteBook(book, response);
        } else {
          console.log(book, newShelf, response)
          this.moveBook(book, newShelf, response);
        }
      })
  }

  camelToTitle = (str) => str
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase());

  render(){
    return (
      <Aux className={['book-shelf'].join(' ')}>
        <div></div>
          {this.state.shelves.map(shelf => (
            this.state.books.filter(book => (book.shelf === shelf)).map((book, index) => (
              <Aux>
                {index === 0 && <h2 className='details underline'>{this.camelToTitle(book.shelf)}</h2>}
                  <Book
                    title={book.title}
                    authors={book.authors}
                    key={index}
                    index={index}
                    shelf={shelf}
                    image={book.imageLinks}
                    click={this.changeShelfHandler}
                    averageRating={book.averageRating}
                    id={book.id}
                  />
              </Aux>
            ))
          ))}

      </Aux>
    )
  }
}

export default Bookshelf
