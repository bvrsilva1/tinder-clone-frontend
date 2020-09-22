import React, { useState, useEffect } from 'react'
import axios from './network/axios'
import TinderCard from 'react-tinder-card'
import SwipeButtons from './SwipeButtons'
import './Cards.css'

const Cards = () => {
  // const [people, setPeople] = useState([
  //   {
  //     name: 'test',
  //     image:
  //       'https://i.pinimg.com/236x/8e/55/aa/8e55aa8bf0e16f363bcb9602e6ec76d6.jpg',
  //   },
  //   {
  //     name: 'test',
  //     image:
  //       'https://i.pinimg.com/236x/8e/55/aa/8e55aa8bf0e16f363bcb9602e6ec76d6.jpg',
  //   },
  //   {
  //     name: 'test',
  //     image:
  //       'https://i.pinimg.com/236x/8e/55/aa/8e55aa8bf0e16f363bcb9602e6ec76d6.jpg',
  //   },
  //   {
  //     name: 'test',
  //     image:
  //       'https://i.pinimg.com/236x/8e/55/aa/8e55aa8bf0e16f363bcb9602e6ec76d6.jpg',
  //   },
  //   {
  //     name: 'test',
  //     image:
  //       'https://i.pinimg.com/236x/8e/55/aa/8e55aa8bf0e16f363bcb9602e6ec76d6.jpg',
  //   },
  // ])

  const endpoint = '/cards?page=0&size=5'
  const [people, setPeople] = useState([])
  const [url, setUrl] = useState(endpoint)
  const [hasCards, setHasCards] = useState(true)

  const swiped = (direction, nameToDelete) => {
    console.log(`swiped ${nameToDelete}`)
  }

  const outOfFrame = (name) => {
    console.log(`${name} left the screen`)
  }

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get(url)

      if (req.data.data.length > 0) {
        setUrl(req.data._links.self.href.split('/')[3])
        setPeople(req.data.data)
      } else setHasCards(false)
    }
    fetchData()
  }, [])

  const handleSwipe = (dir, person, index) => {
    swiped(dir, person.name)

    if (index === 0) updateStack()
  }

  const updateStack = async () => {
    const req = await axios.get(url)

    if (req.data.data.length > 0) {
      setUrl(req.data._links.self.href.split('/')[3])
      setPeople(req.data.data)
    } else setHasCards(false)
  }

  return (
    <div className='cards'>
      <div className='cards__cardContainer'>
        {hasCards ? (
          people.map((person, index) => (
            <TinderCard
              key={person.name}
              className='swipe'
              preventSwipe={['up', 'down']}
              onSwipe={(dir) => handleSwipe(dir, person, index)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                className='card'
                style={{ backgroundImage: `url(${person.image})` }}
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          ))
        ) : (
          <div>
            <p className='cards__noCards'>
              It seems like there is no one around right now!
            </p>
            <p className='cards__noCards'>Come back in a bit for more :)</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cards
