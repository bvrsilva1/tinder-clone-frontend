import React, { useEffect, useState } from 'react'
import axios from './network/axios'
import './Profile.css'

const Profile = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get('/cards/5f6430d2bc8037104080a7b3')
      console.log('profile', req.data)
      setUser(req.data.data)
    }

    fetchData()
  }, [])

  return (
    <div className='profile'>
      <div className='profile__photo'>
        <img src={user?.image} alt='' />
      </div>
      <div className='profile_name'>
        <p>{user?.name}</p>
      </div>
      <div className='profile_bio'>
        <p>{user?.bio}</p>
      </div>
    </div>
  )
}

export default Profile
