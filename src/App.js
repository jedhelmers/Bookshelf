import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import Sidebar from './Sidebar'
import BookDetails from './BookDetails'
import Search from './Search.js'
import { Route, Link } from 'react-router-dom'
import logo from './images/logo.svg';
import './App.css';
import Aux from './hoc/Aux'
import * as booksAPI from './BooksAPI'



class App extends Component {
  state = {
    books: [],
    shelves: ['read', 'wantToRead', 'currentlyReading', 'none'],
    searchResults: [
      "Papaya",
      "Persimmon",
      "Paw Paw",
      "Prickly Pear",
      "Peach",
      "Pomegranate",
      "Pineapple"
    ]
  }


  componentDidMount() {
    this.fetchBooksFromDB()
    booksAPI.getAll().then(books => {
      this.setState({
        books: books,
     })
    })
  }

componentDidUpdate(prevProps, prevState, snapshot) {

  // console.log(prevState.books, this.state.books)
  if(prevState.books !== this.state.books) {
    this.fetchBooksFromDB()
  }
}


  fetchBooksFromDB() {
    booksAPI.getAll().then((books) => {
        // sift and reformat data before storing it into state
        this.setState(books);
    })
  }

  searchForBooks(str) {
    booksAPI.search('art').then(searchResults => {
      this.setState({ searchResults: searchResults })
    })
  }

  changeShelfHandler = (book, shelf) => {
    booksAPI.update(book, shelf)
      .then(booksAPI.getAll()
      .then((books) => {
        this.setState({ books })
      }))
  }

  render() {
    return (
      <div className="container">
          <header className={['flex-col-space-between', 'shadow'].join(' ')}>
            <div className='flex-row'>
              <Link to='/' className='logo'>
                  <img src={logo}/>
              </Link>


              <span style={{ width: 200 }}></span>

            </div>
            <div className='flex-row' style={{ height: 5, backgroundColor: '#373737', margin: -10, paddingRight: 20 }}>
            </div>
          </header>
          <div className={["sidebar", 'shadow'].join(' ')}><Sidebar /></div>
          <div className="card">

            <div>
              <div className='four-row-grid'>
                  <Route
                    exact path='/'
                    render={() => (
                      <Aux>
                        <Bookshelf shelves={this.state.shelves} books={this.state.books} click={this.changeShelfHandler}/>
                      </Aux>

                    )}
                  />

                <Route
                  path='/details'
                  component={BookDetails}
                  render={() => (
                    <BookDetails />
                  )}
                />
                <Route
                  path='/search'
                  component={Search}
                  render={() => (
                    <Search />
                  )}
                />
              </div>

            </div>

          </div>



      </div>
    );
  }
}

export default App;
