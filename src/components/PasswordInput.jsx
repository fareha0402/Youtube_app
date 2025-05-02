import { useState } from "react"

const PasswordInput = () => {
  const [show,setShow] = useState(false)
  const [password, setPassword] = useState('')
  return (
    <div>
        <input type={show ? 'text' :'password'} className="p-2 m-2 border border-black" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button className="p-2 bg-amber-500 text-black rounded-lg" onClick={()=> setShow(prev =>!prev)}>{show ? 'Show' :'Hide'}</button>
    </div>
  )
}

export default PasswordInput