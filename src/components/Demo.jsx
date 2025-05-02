import { useEffect, useState } from 'react'

const Debounce_search = () => {
    const [searchQuery,setSearchQuery] = useState('')
    const [searchResults,setSearchResults] = useState('')
    
    useEffect(() =>{
        // API call to be made
        const clear = setTimeout(() => {
        // call API and set the results
        debounce()
        },2000)
        
        return () => { clearTimeout(clear)}
    },[searchQuery])

    const debounce = () =>{
            // fetch() with the query
            // let response = fetch('teste',)
            setSearchResults('Testing')
        }
  return (
    <>
    <div>Debounce_search</div>
    <input className='m-4 p-2 border border-black' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
    <p>Searching for ... {searchResults}</p>
    </>
  )
}

export default Debounce_search