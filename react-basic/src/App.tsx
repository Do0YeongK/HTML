import React from 'react'
import SignIn from './views/Authentication/SignIn'
import SignUp from './views/Authentication/SignUp'
import {Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    <div>
      App
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </div>
  )
}
