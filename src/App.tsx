import React from 'react'
import Card, { CardVariant } from './components/Card'
import EventsExample from './components/EventsExample'
import { Route, Routes, NavLink, BrowserRouter as Router } from 'react-router-dom'
import UsersPage from './components/UsersPage'
import TodosPage from './components/TodosPage'
import UserItemPage from './components/UserItemPage'


const App = () => {
  return (
    <div>
      <Router>
        <div style={{ display: 'flex', gap: 20 }}>
          <NavLink to="/event">Event</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/todos">Todos</NavLink>
        </div>

        <Card onClick={(num) => console.log('click', num)} variant={CardVariant.outlined} width='200px' height='200px' >
          <button>Кнопка</button>
        </Card>

        <Routes>
          <Route path='/event' element={<EventsExample />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/todos' element={<TodosPage />} />
          <Route path='/users/:id' element={<UserItemPage />} />
          {/* <Route path='/todos/:id' element={<TodoItemPage />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
