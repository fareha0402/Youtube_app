import React from 'react'
import ChatMessages from './ChatMessages'

const LiveChat = () => {
  return (
    <div className='ml-2 p-2 border border-black w-full h-[430px]'>
        <ChatMessages name={'Fareha'} messages={'Hello World !!'}></ChatMessages>
        <ChatMessages name={'Fareha'} messages={'Hello World !!'}></ChatMessages>
        <ChatMessages name={'Fareha'} messages={'Hello World !!'}></ChatMessages>
        <ChatMessages name={'Fareha'} messages={'Hello World !!'}></ChatMessages>
    </div>
  )
}

export default LiveChat