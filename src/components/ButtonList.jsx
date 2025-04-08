import React from 'react'
import { BTN_LIST } from '../utils/Constants'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex whitespace-nowrap'>
    { BTN_LIST.map((ele) => {
     return <Button  key={ele.name} name={ele.name}></Button>
    })}
    </div>
  )
}

export default ButtonList