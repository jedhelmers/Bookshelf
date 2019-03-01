import React from 'react'

function book(props) {
  return (
    <div className={['book-card', 'white'].join(' ')} onClick={props.click} style={{ marginBottom: 20 }}>
      <div style={{ overflow: 'hidden', height: 200 }}>
        <img src={props.image.thumbnail} className={['book-image'].join(' ')}/>
      </div>
      <div className='flex-row text-gray'>
        <i className={['clickable', 'fa', 'fa-book'].join(' ')} style={{ width: 35 }}/>
        <i className={['clickable', 'fa', 'fa-list'].join(' ')} style={{ width: 35 }}/>
        <i className={['clickable', 'fa', 'fa-heart'].join(' ')} style={{ width: 35 }}/>
      </div>

      <h4 className='bold text-left'>
        {props.title}
      </h4>

      <h4>
        {props.authors}
      </h4>
    </div>
  )
}

export default book
