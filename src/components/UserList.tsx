import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../types/types'
import UserItem from './UserItem'

interface UserListPros {
  users: IUser[]
}

const UserList: FC<UserListPros> = ({ users }) => {
  let navigate = useNavigate();

  return (
    <div>
      {users.map(user =>
        <UserItem onClick={(user) => navigate('/users/' + user.id)} key={user.id} user={user} />
      )
      }
    </div>
  )
}

export default UserList