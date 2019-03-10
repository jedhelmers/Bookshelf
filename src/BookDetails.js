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
      imageLinks: []
    }
  }

  componentDidMount() {
    const { handle } = this.props.match.params
    const { title } = this.props.location.state

    booksAPI.get(title).then(book => {
      console.log(book, "j")
      this.setState({ book })
    })

      // booksAPI.update('IOejDAAAQBAJ', 'read').then(data => console.log(data.read))
  }


  render() {
    // console.log(this.props.location.state)

    const { title, subtitle, description, authors, puslisher, imageLinks, averageRating } = this.state.book
    return (
      <div className='details'>
          <div style={{ backgroundColor: 'white', padding: 15 }} className='two-col-grid'>
            <span style={{ height: 300, margin: 15 }}>
              <img alt={title} src={imageLinks.thumbnail} className={['book-image'].join(' ')}/>
              <Stars averageRating={averageRating}></Stars>

              <div className='help'>
                by {authors.map(author => <Row type="h4">{author}</Row>)}
              </div>
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
