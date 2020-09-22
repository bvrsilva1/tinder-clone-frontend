import React, { useEffect, useState } from 'react'
import axios from './network/axios'

const Matches = () => {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get('/cards/matches/5f6430d2bc8037104080a7b3')
      setMatches(req.data.data)
    }

    fetchData()
  }, [])

  return (
    <div>
      {matches && matches.length > 0 ? (
        <p>Your matches</p>
      ) : (
        <p>You don't have matches YET</p>
      )}
      {matches.map((match, index) => (
        <p key={index}>{match.name}</p>
      ))}
    </div>
  )
}

export default Matches
