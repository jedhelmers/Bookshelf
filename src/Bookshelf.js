import React, { Component } from 'react'
import Book from './Book'

const books = [
  {
    'title': 'Sidhartha',
    'author': 'Herman Hesse'
  },
  {
    'title': 'Stepenwolf',
    'author': 'Herman Hesse'
  },
  {
    'title': 'Sidhartha',
    'author': 'Herman Hesse'
  },
  {
    'title': 'Stepenwolf',
    'author': 'Herman Hesse'
  },
  {
    'title': 'Sidhartha',
    'author': 'Herman Hesse'
  },
  {
    'title': 'Stepenwolf',
    'author': 'Herman Hesse'
  }
]

class Bookshelf extends Component {
  state = {
    books: [...books]
  }


  render(){
    return (
      <div className={['book-shelf'].join(' ')}>
        <h2 className='text-left underline'>Currently Reading</h2>
        {this.state.books.map((book, index) => (
          <Book
            title={book.title}
            author={book.author}
            key={index}
            index={index}
          />
        ))}
      </div>
    )
  }
}

export default Bookshelf
