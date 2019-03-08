import React, { Component } from 'react'
import Book from './Book'
import Aux from './hoc/Aux'
import * as booksAPI from './BooksAPI.js'


class Bookshelf extends Component<Props> {
  state = {
    read: [],
    currentlyReading: [],
    wantToRead: []
  }

  componentDidMount() {

    booksAPI.getAll().then(books => {
      this.setState({
        read: books.filter(book => book.shelf === 'read'),
        currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
        wantToRead: books.filter(book => book.shelf === 'wantToRead')
     })
    })
    console.log(this.state)

// "jAUODAAAQBAJ", "IOejDAAAQBAJ", "1wy49i-gQjIC"

  }

  searchAPI = (search) =>
    booksAPI.search(search)
      .then(books => {
        console.log(books)
        this.setState({ books })
      })


  camelToTitle = (str) => str
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase());

  render(){
    return (
      <Aux className={['book-shelf'].join(' ')}>
        {Object.keys(this.state).map(shelf => (
          <Aux>
          <h2 className='text-left underline shelf-heading'>{this.camelToTitle(shelf)}</h2>
            {this.state[shelf].map((book, index) => (
              <Book
                title={book.title}
                authors={book.authors}
                key={index}
                index={index}
                shelf={shelf}
                image={book.imageLinks}
                click={() => this.searchAPI('ar')}
                averageRating={book.averageRating}
                id={book.id}
              />
            ))
          }
          </Aux>
        ))}
      </Aux>
    )
  }
}

export default Bookshelf
