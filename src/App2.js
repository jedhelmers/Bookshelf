import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import Sidebar from './Sidebar'
import BookDetails from './BookDetails.js'
import { Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    screen: 'details'
  }



  render() {
    return (
      <div className="App">
        <header>
            <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ width: 100 }}>Logo</div>
            </span>

            <Link
              to='/shelf'
            >
              Home
            </Link>

            <Link
              to='/details'
            >
              Details
            </Link>

            <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: 20 }}>
              <input type="text" placeholder='Search...' style={{ width: 300, height: 34, borderRadius: 20, paddingLeft: 10, backgroundColor: 'rgba(237, 237, 237, .75)', borderStyle: 'none', outline: 'none' }}/>
            </span>

        </header>
        <div id="container">

          <div>

              <Route
                exact path='/shelf'
                render={() => (
                  <Bookshelf/>
                )}
              />

            <Route
              path='/details'
              render={() => (
                <BookDetails
                  title='Book'
                />
              )}
            />
            <Sidebar />


          </div>

        </div>

      </div>
    );
  }
}

export default App;
