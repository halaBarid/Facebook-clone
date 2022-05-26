import React from 'react'
import {BsSearch} from "react-icons/bs";
import './firsrtColumn.css'
const FirstColumn = () => {
  return (
    <div className='first-column col-md-3'>
        <a href='/'>H</a>
        <div className="search-input">
            <BsSearch/>
            <input type="text" placeholder='Search Hala' />
        </div>
    </div>
  )
}

export default FirstColumn