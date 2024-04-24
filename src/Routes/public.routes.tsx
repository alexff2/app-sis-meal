import { Routes, Route, Navigate } from 'react-router-dom'

import {
  Login
} from '../pages'

export function PublicRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}