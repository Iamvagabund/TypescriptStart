import React, { useEffect } from 'react'
import { FC } from 'react';
import { IUser } from '../types/types';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


type UserItemPageParams = {
  id: string;
}


const UserItemPage: FC = () => {
  const [user, setUser] = React.useState<IUser | null>(null)
  const params = useParams<UserItemPageParams>()
  let navigate = useNavigate();

  function handleClick() {
    navigate('/users')
  }

  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
      setUser(response.data)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div style={{ marginTop: 20 }}>
      <button onClick={handleClick}>Back</button>
      <h1>Страница пользователя {user && user.name}</h1>
      <div>
        {user && user.email}
      </div>
      <div>
        {user && user.address.city} {user && user.address.street} {user && user.address.zipcode}
      </div>
    </div>
  )
}

export default UserItemPage