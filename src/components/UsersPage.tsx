import axios from 'axios';
import React, { useEffect } from 'react'
import { FC } from 'react';
import { IUser } from '../types/types';
import List from './List';
import UserItem from './UserItem';
import UserList from './UserList';
import { useNavigate } from 'react-router-dom';


const UsersPage: FC = () => {

  const [users, setUsers] = React.useState<IUser[]>([])
  let navigate = useNavigate();

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (error) {
      alert(error)
    }
  }


  return (
    <div>
      <UserList users={users} />
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem onClick={(user) => navigate('/users/' + user.id)} user={user} key={user.id} />}
      />
    </div>
  )
}

export default UsersPage