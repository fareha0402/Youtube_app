import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='border bg-black text-white p-2 m-3 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button