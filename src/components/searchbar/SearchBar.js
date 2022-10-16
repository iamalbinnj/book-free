import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './searchbar.css'
import axios from 'axios';
import Cards from '../cards/Cards';

const SearchBar = () => {
  const [search, setSearch]=useState("");
  const [bookData, setBookData]=useState([]);

  const searchBook=(event)=>{
    if(event.key==="Enter"){
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBtlC0GpfUaigRxnw5atVgAr7X2lr3OUG4${"&maxResults=40"}`)
      .then(res=>setBookData(res.data.items))
      .catch(err=>console.log(err))
    }
  }
  return (
    <>
      <div className="support">
        <p className="heading">Book Free</p>
        <div className="text__input">
          <input type="text" placeholder="Search by Name or Author....." 
          value={search} onChange={event=>setSearch(event.target.value)} onKeyPress={searchBook} />
          <div className="view__port"></div>
          <div className="icon"><i><SearchIcon /></i></div>
        </div>
      </div>
      {<Cards books={bookData} />}
    </>
  )
}

export default SearchBar