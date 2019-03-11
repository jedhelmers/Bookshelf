import React, { Component } from 'react'
import Aux from './hoc/Aux'
import { Route, Link } from 'react-router-dom'

function Authors(props) {
  return (
    <div className='help'>{props.author}</div>
  )
}

function Stars(props) {
  return (
    <span>
      <div className="stars stars-outer">
        <div className="stars-inner" style={{ width: (props.averageRating * 10) }}></div>
      </div>
    </span>
  )
}

function Book (props) {

    const { authors, averageRating, title, subtitle, keys, id, shelf, imageLinks } = props.book
    return (
      <div key={keys} className={['book-card', 'white'].join(' ')} style={{ marginBottom: 20 }}>
        <Stars averageRating={averageRating}/>
        <div style={{ overflow: 'hidden', height: 200 }}>
          <Link to={{
              pathname: '/details',
              state: {
                title: `${id}`
              }
          }}>
            <img src={imageLinks.thumbnail} className={['book-image'].join(' ')}/>
          </Link>

        </div>
        <div className='flex-row text-gray'>
          <i onClick={() => props.click(props, 'wantToRead')} className={[shelf === 'wantToRead' && 'selected', 'clickable', 'fa-action', 'fa', 'fa-heart'].join(' ')} style={{ width: 35 }}/>
          <i onClick={() => props.click(props, 'currentlyReading')} className={[shelf === 'currentlyReading' && 'selected', 'clickable', 'fa-action', 'fa', 'fa-book'].join(' ')} style={{ width: 35 }}/>
          <i onClick={() => props.click(props, 'read')} className={[shelf === 'read' && 'selected', 'clickable', 'fa-action', 'fa', 'fa-clipboard-check'].join(' ')} style={{ width: 35 }}/>
        </div>

        <h3 className='bold text-left'>
          {title}
        </h3>

        <h4 className='text-left'>
          <div className='flex-row'>
            <span>
              {authors.map(author => <Authors author={author}/>)}
            </span>
            {props.searchBool === false &&
              <span>
                <i onClick={() => props.click(props, 'none')} className='clickable selected fa fa-trash' style={{ borderLeft: '1px solid #ccc' }}/>
              </span>
            }
          </div>

        </h4>
      </div>
    )

}

export default Book
