import {React,useState} from 'react'
import './Search.css'
const Search = () => {

const [searchText, setSearchText] = useState('')
const searchTextHandler = (e) => {
    setSearchText(e.target.value)
}
  return (
    <div>
      <input
        className="search-box"
        type="text"
        placeholder="Search and Find"
        value={searchText}
        onChange={searchTextHandler}
      ></input>
    </div>
  )
}

export default Search
