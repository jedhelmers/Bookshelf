import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import Sidebar from './Sidebar'
import BookDetails from './BookDetails.js'
import Search from './Search.js'
import { Route, Link } from 'react-router-dom'
import logo from './images/logo.svg';
import './App.css';
import Aux from './hoc/Aux'
import { read } from './Data/Read.json'

class App extends Component {

  state = {
    screen: 'shelf'
  }



  render() {
    return (
      <div className="container">
          <header className={['flex-col-space-between', 'shadow'].join(' ')}>
            <div className='flex-row'>
              <span className='logo'>
                <img src={logo}/>
              </span>

              <span className='flex-col-center'>
                <Link to='/'>Home</Link>
              </span>

              <span className='flex-col-center'>
                <Link to='/shelf'>Current</Link>
              </span>

              <span className='flex-col-center'>
                <Link to='/shelf'>Soon</Link>
              </span>

              <span className='flex-col-center'>
                <Link to='/details'>Sooner</Link>
              </span>

              <span style={{ width: 200 }}></span>

              <span className='flex-col-center'>
                <input type="text" placeholder='Search...'/>
              </span>
            </div>
            <div className='flex-row' style={{ height: 5, backgroundColor: '#373737', margin: -10, paddingRight: 20 }}>
            </div>
          </header>
          <div className={["sidebar", 'shadow'].join(' ')}><Sidebar /></div>
          <div className="card">

            <div>
              <h3 className='text-center shelf-heading'>Welcome To</h3>
              <h1 className='text-center bold shelf-heading'>BOOK IT ALL HELL!</h1>

              <div className='four-row-grid'>
                  <Route
                    exact path='/'
                    render={() => (
                      <Aux>
                        <Bookshelf shelf='currentlyReading'/>
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
