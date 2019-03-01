import React, { Component } from 'react'
import Book from './Book'
import Aux from './hoc/Aux'
import * as booksAPI from './BooksAPI.js'


class Bookshelf extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    booksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  searchAPI = (search) =>
    booksAPI.search(search)
      .then(books => {
        this.setState({ books })
      })


  render(){
    console.log(this.state.books)
    return (
      <Aux className={['book-shelf'].join(' ')}>
        {this.state.books.map((book, index) => (
          <Book
            title={book.title}
            authos={book.authors}
            key={index}
            index={index}
            image={book.imageLinks}
            click={() => this.searchAPI('ar')}
          />
        ))}
      </Aux>
    )
  }
}

export default Bookshelf
