import { useState } from 'react'
import './App.css'
import Landing from './pages/landing'
import Header from './layout/header/index'
function App() {
  return (
    <>
      <div className='w-full'>
        <Header />
        <Landing />
      </div>
    </>
  )
}
export default App
