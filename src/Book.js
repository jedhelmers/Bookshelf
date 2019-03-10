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

    return (
      <div className={['book-card', 'white'].join(' ')} style={{ marginBottom: 20 }}>
        <Stars averageRating={props.averageRating}/>

        <div style={{ overflow: 'hidden', height: 200 }}>
          <Link to={{
              pathname: '/details',
              state: {
                title: `${props.id}`
              }
          }}>
            <img src={props.image.thumbnail} className={['book-image'].join(' ')}/>
          </Link>

        </div>
        <div className='flex-row text-gray'>
          <i onClick={() => props.click(props, 'wantToRead')} className={[props.shelf === 'wantToRead' && 'selected', 'clickable', 'fa-action', 'fa', 'fa-heart'].join(' ')} style={{ width: 35 }}/>
          <i onClick={() => props.click(props, 'currentlyReading')} className={[props.shelf === 'currentlyReading' && 'selected', 'clickable', 'fa-action', 'fa', 'fa-book'].join(' ')} style={{ width: 35 }}/>
          <i onClick={() => props.click(props, 'read')} className={[props.shelf === 'read' && 'selected', 'clickable', 'fa-action', 'fa', 'fa-clipboard-check'].join(' ')} style={{ width: 35 }}/>
        </div>

        <h3 className='bold text-left'>
          {props.title}
        </h3>

        <h4 className='text-left'>
          {props.authors.map(author => <Authors author={author}/>)}
        </h4>
      </div>
    )

}

export default Book
