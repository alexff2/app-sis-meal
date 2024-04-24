import { Routes, Route, Navigate } from 'react-router-dom'

import { AppRegistrations, AppCodeReading } from '../Templates'

import {
  Home,
  User,
  Employee,
  Department,
  CodeReading
} from '../pages'
import { useAuthenticate } from '../hooks'

export function PrivateRoutes() {
  const { userAuthenticate } = useAuthenticate()
  return (
    <Routes>
      {userAuthenticate?.app === 'register'
      ? <Route path='/' element={<AppRegistrations />}>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<User />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/department' element={<Department />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      : <Route path='/' element={<AppCodeReading />}>
          <Route path='/' element={<CodeReading />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>}
    </Routes>
  )
}