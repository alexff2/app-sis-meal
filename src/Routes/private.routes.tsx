import { Routes, Route, Navigate } from 'react-router-dom'

import { AppRegistrations, AppCodeReading } from '../Templates'

import {
  Home,
  User,
  Reports,
  Employee,
  Department,
  CodeReading,
} from '../pages'
import { ByDays } from '../pages/Reports/Meals/ByDays'
import { Barcode } from '../pages/Reports/Barcode'

import { useAuthenticate } from '../hooks'

export function PrivateRoutes() {
  const { userAuthenticate } = useAuthenticate()
  return (
    <Routes>
      {userAuthenticate?.app === 'register'
      ? <>
          <Route path='/' element={<AppRegistrations />}>
            <Route path='/' element={<Home />} />
            <Route path='/user' element={<User />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/employee' element={<Employee />} />
            <Route path='/department' element={<Department />} />
            <Route path='/reports/meals/days' element={<ByDays />} />
            <Route path='/reports/barcode' element={<Barcode />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
        </>
      : <Route path='/' element={<AppCodeReading />}>
          <Route path='/' element={<CodeReading />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>}
    </Routes>
  )
}