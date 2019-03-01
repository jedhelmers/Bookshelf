import React, { Component } from 'react'
import Aux from './hoc/Aux'

const featuredBooks = [
  {
    section: 'New Arrivals',
    items: [
      {
        title: 'Hello',
        author: 'Jack Bandit'
      },
      {
        title: 'Hello',
        author: 'Jack Bandit'
      }
    ]
  },
  {
    section: 'Old Shit',
    items: [
      {
        title: 'Hello',
        author: 'Jack Bandit'
      },
      {
        title: 'Hello',
        author: 'Jack Bandit'
      },
      {
        title: 'Hello',
        author: 'Jack Bandit'
      },
      {
        title: 'Hello',
        author: 'Jack Bandit'
      }
    ]
  }

]

const style = {
  height: '100%',
  backgroundColor: 'var(--white)',
  width: 80,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start'
}

function FeaturedItem(props) {
  return (
    <div className={['featured-card', 'flex-row'].join(' ')}>
      <span style={{ paddingLeft: 10, width: '100%' }}>
        <h3>{props.title}</h3>
        <p>{props.author}</p>
        <p>{props.author}</p>
      </span>
      <div style={{ width: 160, height: '100%', backgroundColor:'lightblue' }}></div>

    </div>
  )
}


class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = { featuredBooks: [...featuredBooks] }
  }
  state = {
    content: featuredBooks
  }

  render() {
    // console.log(this.state.featuredBooks, 'butt')
    const arry = this.state.featuredBooks.map(book => (
      <Aux>
        <h3 className='bold'>{book.section}</h3>
        {book.items.map(item =>
          <FeaturedItem
            title={item.title}
            author={item.author}
          />
        )}
      </Aux>
      )

    )
    return (
      <Aux>
        <h2 className='underline'>Pick You</h2>
        {arry}
      </Aux>
    )
  }
}

export default Sidebar
