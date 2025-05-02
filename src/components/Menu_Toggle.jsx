import { useContext } from "react"
import { ThemeContext } from "../utils/context/ToggleThemeContext"
const Menu_Toggle = () => {
    const {darkMode,toggleMode} = useContext(ThemeContext)
  return (
    <div className={darkMode ? 'bg-black' : 'bg-white'}>
        <button className="p-2 m-2 bg-amber-200 text-black" onClick={toggleMode}>Mode: {darkMode}</button>
    </div>
  )
}

export default Menu_Toggle