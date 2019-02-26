import React from 'react'

function book(props) {
  return (
    <div className={['book-card'].join(' ')}>
      <img src={'https://picsum.photos/200/' + (300 + (.1 * props.index)) + '/?random'} className={['book-image'].join(' ')}/>
        {console.log(props.index)}
      <div>
        {props.author}
      </div>

      <div>
        {props.title}
      </div>

    </div>
  )
}

export default book
