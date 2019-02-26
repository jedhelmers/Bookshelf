import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ width: 100 }}>Logo</div>
          </span>

          <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: 20 }}>
            <input type="text" placeholder='Search...' style={{ width: 300, height: 34, borderRadius: 20, paddingLeft: 10, backgroundColor: 'rgba(237, 237, 237, .75)', borderStyle: 'none', outline: 'none' }}/>
          </span>
        </header>
        <div className='book-image'>
          <img src={'https://picsum.photos/1200/300/?random'} className={['book-image'].join(' ')} style={{ opacity: .8}}/>
        </div>
        <Bookshelf/>
      </div>
    );
  }
}

export default App;
