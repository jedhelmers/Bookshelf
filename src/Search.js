import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'
import * as booksAPI from './BooksAPI.js'

function Stars(props) {
  return (
    <span>
      <div className="stars stars-outer">
        <div className="stars-inner" style={{ width: (props.averageRating * 10) }}></div>
      </div>
    </span>
  )
}


class Search extends React.Component<Props> {

  state = {
    results: [],
    search: 'art'
  }

  searchForBooks() {
    booksAPI.search(this.state.search).then(searchResults => {
      this.setState(() => ({
        results: searchResults
      }))
    })
  }

  componentDidMount() {
    // console.log(this.state)
    this.searchForBooks()

  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.results, prevState.search, this.state.search)
    if(prevState.search !== this.state.search) {
      this.searchForBooks()
    }
  }

  changeShelfHandler = (book, shelf) => {
    booksAPI.update(book, shelf)
      .then(booksAPI.getAll()
      .then((books) => {
        this.setState({ results: books })
      }))
  }

  handlerChange = (event) => {
    this.setState({ search: event.target.value })
  }

  render() {
    // console.log(this.props.location.state)

    return (
      <div className='details'>
        <form>
          <input type='text' className='shadow-light' value={this.state.search} onChange={this.handlerChange} placeholder='Search...'/>
        </form>
        <div className='four-row-grid'>

          {this.state.results.map((book, index) => (
            <Book
              book={book}
              key={index}
              keys={index}
              index={index}
              searchBool={true}
              click={this.changeShelfHandler}
              id={book.id}
            />
          ))}

        </div>
    </div>
    )
  }

}

export default Search
