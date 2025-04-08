import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const Sidebar = () => {
  const showMenu = useSelector(store => store.app.showMenu)
  const navigate  = useNavigate()
  if(!showMenu) return null 
  return (
    <div className='p-2 col-span-2 shadow-lg whitespace-nowrap'>
    <h1 className='font-bold p-3 cursor-pointer' onClick={() => navigate('/')}>Home</h1>
    <h1 className='font-bold p-3'>Shorts</h1>
    <h1 className='font-bold p-3'>Subscription</h1>
    <h1 className='font-bold p-3'>Youtube Music</h1>
    <hr></hr>
    <h1 className='font-bold text-xl p-3'>You</h1>
    <h1 className='font-bold p-3'>History</h1>
    <h1 className='font-bold p-3'>Playlists</h1>
    <h1 className='font-bold p-3'>Your Videos</h1>
    <h1 className='font-bold p-3'>Your Courses</h1>
    <h1 className='font-bold p-3'>Watch later</h1>
    </div>
  )
}

export default Sidebar