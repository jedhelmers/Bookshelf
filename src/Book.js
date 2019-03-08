import React, { Component } from 'react'
import Aux from './hoc/Aux'
import { Route, Link } from 'react-router-dom'

function Authors(props) {
  return (
    <div>{props.author}</div>
  )
}

function Book (props) {

    return (
      <Link to={{
          pathname: '/details',
          state: {
            title: `${props.id}`
          }
      }}>
      <div className={['book-card', 'white'].join(' ')} style={{ marginBottom: 20 }}>
        {props.averageRating > 0 ? (
          <Aux>
            <span className='badge-text'>{props.averageRating}</span>
            <i
              className={['clickable', 'fa', 'fa-heart'].join(' ')}
              style={{ width: 35, fontSize: 30, position: 'absolute', right: 0, top: 0, color: '#e75b52', padding: 0 }}
            />
          </Aux>
        ) : null }

        <div style={{ overflow: 'hidden', height: 200 }}>
          <img src={props.image.thumbnail} className={['book-image'].join(' ')}/>
        </div>
        <div className='flex-row text-gray'>
          <i className={[props.shelf === 'read' && 'selected', 'clickable', 'fa-action', 'fa', 'fa-book'].join(' ')} style={{ width: 35 }}/>
          <i className={[props.shelf === 'currentlyReading' && 'selected', 'clickable', 'fa-action', 'fa', 'fa-clipboard'].join(' ')} style={{ width: 35 }}/>
          <i className={[props.shelf === 'wantToRead' && 'selected', 'clickable', 'fa-action', 'fa', 'fa-clipboard-check'].join(' ')} style={{ width: 35 }}/>
        </div>

        <h3 className='bold text-left'>
          {props.title}
        </h3>

        <h4 className='text-left'>
          {props.authors.map(author => <Authors author={author}/>)}
        </h4>
      </div>
      </Link>
    )

}

export default Book
