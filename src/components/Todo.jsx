import { useState } from "react"

const Todo = () => {
    const [todo,setTodo] = useState([])
    const [inputVal,setInputVal] = useState('')
    const [isAdd,setIsAdd] = useState(true)
    const [editIndex,setEditIndex] = useState(null)

    const addToList = () =>{
        if(inputVal.trim() && isAdd){
        setTodo([...todo,inputVal])
        setInputVal('')
        setIsAdd(true)
        }
        
    }
    const updateItem = () =>{
        let updatedList = [...todo]
        updatedList[editIndex] = inputVal
        setTodo(updatedList)
        setInputVal('')
        setEditIndex(null)
        setIsAdd(true)
    }
    const handleKeyDown = (event) => {
        console.log(event)
        if(event.key === 'Enter'){
          isAdd?  addToList() : updateItem()
        }
    }
    const editList = (id) => {
        let editItem = todo.find((ele,index) => index === id)
        setInputVal(editItem)
        setIsAdd(false)
        setEditIndex(id)
    }
    const deleteList = (id) => {
        let newTodo = todo.filter((ele,i) => i!==id )
        setTodo(newTodo)

        // reset form
        if(editIndex == id){
            setInputVal('')
            setIsAdd(true)
            setEditIndex(null)
        }
    }
  return (
    <div>Todo
        <input className="p-2 m-2 border border-black" value={inputVal} onKeyDown={handleKeyDown} onChange={(e) => setInputVal(e.target.value)}></input>
        <button className="bg-amber-300 rounded-lg p-2 m-2" onClick={isAdd? addToList : updateItem}>{isAdd? 'Add items': 'Edit item'}</button>
        <ul>List:
            {todo?.map((ele,index) => (
                <>
                <li key={index}>{ele}
                    <button className="p-2 m-2 bg-green-400 rounded-lg" onClick={() => editList(index)}>edit</button>
                    <button className="p-2 m-2 bg-red-400 rounded-lg" onClick={() => deleteList(index)}>delete</button></li>
                </>
            ))}
        </ul>
    </div>
  )
}

export default Todo