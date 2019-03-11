import React, { Component } from 'react'
import Book from './Book'
import Aux from './hoc/Aux'
import { Link } from 'react-router-dom'
// import * as booksAPI from './BooksAPI.js'


class Bookshelf extends Component<Props> {


  camelToTitle = (str) => str
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase());

  render(){
    return (
      <Aux>
        <h2 className='text-center shelf-heading' style={{ marginBottom: 0 }}>Welcome To</h2>
        <h1 className='text-center bold shelf-heading' style={{ marginTop: 0 }}>BOOK IT ALL HELL!</h1>
          {this.props.shelves.map(shelf => (
            this.props.books.filter(book => (book.shelf === shelf)).map((book, index) => (
              <Aux>
                {
                  index === 0 && (
                    <h2 className='details flex-row underline'>
                      {this.camelToTitle(book.shelf)}
                      {book.shelf === 'wantToRead' &&
                        <Link to='/search'><i className='fa fa-plus clickable flex-col-center' style={{ height: 25, width: 25, borderRadius: 30, backgroundColor: '#fbbc05' }}/></Link>
                      }
                    </h2>
                  )
                }
                  <Book
                    book={book}
                    key={index}
                    keys={index}
                    index={index}
                    searchBool={false}
                    click={this.props.click}
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
