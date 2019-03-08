import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as booksAPI from './BooksAPI.js'


function Row(props) {
  return React.createElement(props.type, {}, props.children)
}

class Search extends React.Component {

  state = {
    book: {
      title: 'Details',
      authors: ['John Denver'],
      imageLinks: []
    }
  }

  componentDidMount() {
    const { handle } = this.props.match.params
    const { title } = this.props.location.state || 'IOejDAAAQBAJ'

    booksAPI.get('IOejDAAAQBAJ').then(book => {
      console.log(book, "j")
      this.setState({ book })
    })

      // booksAPI.update('IOejDAAAQBAJ', 'read').then(data => console.log(data.read))
  }


  render() {
    // console.log(this.props.location.state)

    const { title, subtitle, description, authors, puslisher, imageLinks } = this.state.book
    return (
      <div className='details'>
          <div style={{ backgroundColor: 'white', padding: 15 }} className='two-col-grid'>
            <span style={{ height: 300, margin: 15 }}>
              <img alt={title} src={imageLinks.thumbnail} className={['book-image'].join(' ')}/>
              <h3>Author</h3>
              {authors.map(author => <Row type="h4">{author}</Row>)}
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

export default Search
