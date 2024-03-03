

import { useState } from "react"
import axios from "axios"
import Books from "./Books"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import './Header.css'
const Header = () => {
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAOEOOPj0GzQWXvDkQtys0ael8bPZZzJnw'+'&maxResults=20')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
            <div className="Header">
                
                    <h1>A room without books is like<br/> a body without a soul.</h1>
             
                <div className="Bottom-row">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </div>
              
                </div>
            </div>

            <div className="container">
              {
                    <Books book={bookData}/>
              }  
            </div>
        </>
    )
}

export default Header