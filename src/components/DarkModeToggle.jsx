import { useState } from "react"

const DarkModeToggle = () => {
    const [mode, setMode] = useState('Light')

    const toggle = () =>{
        mode === 'Light' ? setMode('Dark') : setMode('Light')
    }
  return (
    <div className={mode ==='Light' ? 'bg-yellow-100 text-black' : 'bg-black text-orange-300'}>
       Selected:  {mode}
    <button className="rounded-md p-2 m-2 border border-amber-500" onClick={toggle}>Toggle</button>
    </div>

  )
}

export default DarkModeToggle