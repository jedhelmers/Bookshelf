import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Aux from './hoc/Aux'
import * as booksAPI from './BooksAPI.js'



const style = {
  height: '100%',
  backgroundColor: 'var(--white)',
  width: 80,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start'
}

function FeaturedItem(props) {
  const { title, authors, imageLinks, id, publishedDate } = props.book
  return (
    <Link to={{
        pathname: '/details',
        state: { title: `${id}`},
      }}
    >
      <div className={['featured-card', 'flex-row'].join(' ')}>
        <span style={{ paddingLeft: 10, width: '100%' }}>
          <h3 className='bold'>{title}</h3>
          <div className='help'>
            by {authors.map(author => <span>{author}</span>)}
            <div>{(publishedDate).split('-')[0]}</div>
          </div>
        </span>
        <div style={{ width: 100, height: '100%', backgroundColor:'lightblue' }}>
          <img alt={title} src={imageLinks.thumbnail} className={['book-image'].join(' ')}/>
        </div>
      </div>
    </Link>
  )
}



class Sidebar extends Component {

  state = {
    featuredBooks: []
  }

  componentDidMount() {
    this.fetchBooksFromDB()
    booksAPI.search('art').then(searchResults => {
      this.setState({ featuredBooks: searchResults })
    })
  }


  fetchBooksFromDB() {
    booksAPI.search('ar').then((books) => {
        // sift and reformat data before storing it into state
        this.setState({ featuredBooks: books });
    })
  }

  render() {

    return (
      <Aux>
        <h2 className='underline'>Pick You</h2>
        {this.state.featuredBooks.sort((a,b) => a.publishedDate > b.publishedDate).slice(1,5).map(book => (
          <FeaturedItem book={book}/>

        ))}
      </Aux>
    )
  }
}

export default Sidebar
