import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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

function Row(props) {
  return React.createElement(props.type, {}, props.children)
}

class BookDetails extends React.Component {

  state = {
    book: {
      title: 'Details',
      authors: ['John Denver'],
      imageLinks: [],
      shelf: ''
    }
  }

  changeShelfHandler = (book, shelf) => {
    booksAPI.update(book, shelf)
      .then(
        booksAPI.get(book.id).then(item => {
          this.setState({ book: item })
        })
      )
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.location.state.title !== this.state.book.id){
      // console.log(prevProps.location.state.shelf, prevState.book.shelf)
      booksAPI.get(prevProps.location.state.title).then(book => {
        this.setState({ book: book })
      })
    }
    // console.log(this.state.searchResults)
  }

  componentDidMount() {
    const { details } = this.props.match.params
    const { title } = this.props.location.state
    // console.log(title)


    booksAPI.get(title).then(book => {
      // console.log(book, title)
      this.setState({ book: book })
    })

      // booksAPI.update('IOejDAAAQBAJ', 'read').then(data => console.log(data.read))
  }


  render() {
    // console.log(this.props.location.state)

    const { title, subtitle, description, authors, puslisher, imageLinks, averageRating, shelf, id } = this.state.book
    return (
      <div className='details'>
          <Link to='/' className='flex-col-center clickable'>
            <i className="fa fa-arrow-left" />
          </Link>
          <div style={{ backgroundColor: 'white', padding: 15, height: 425 }} className='two-col-grid'>
            <span style={{ height: 300, margin: 15 }}>
              <img alt={title} src={imageLinks.thumbnail} className={['book-image'].join(' ')}/>
              <Stars averageRating={averageRating}></Stars>

              <div className='help'>
                by {authors.map(author => <Row type="h4">{author}</Row>)}
              </div>
              <div className='flex-row text-gray'>
                <i onClick={() => this.changeShelfHandler(this.state.book, 'wantToRead')} className={[shelf === 'wantToRead' && 'selected', 'clickable', 'fa-action', 'fa', 'fa-heart'].join(' ')} style={{ width: 35 }}/>
                <i onClick={() => this.changeShelfHandler(this.state.book, 'currentlyReading')} className={[shelf === 'currentlyReading' && 'selected', 'clickable', 'fa-action', 'fa', 'fa-book'].join(' ')} style={{ width: 35 }}/>
                <i onClick={() => this.changeShelfHandler(this.state.book, 'read')} className={[shelf === 'read' && 'selected', 'clickable', 'fa-action', 'fa', 'fa-clipboard-check'].join(' ')} style={{ width: 35 }}/>
              </div>
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
              <span>
                <h1>{title}</h1>
                <h4>{subtitle}</h4>
              </span>
              <p>
                {description}
              </p>
            </div>
          </div>
      </div>
    )
  }

}

export default BookDetails
