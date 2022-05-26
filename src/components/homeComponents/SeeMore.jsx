import React from 'react'
import {  MdKeyboardArrowDown } from "react-icons/md";
import './firstHomeColumn.css'


const SeeMore = () => {
  return (
    <div className='see-more'>
        <MdKeyboardArrowDown className='see-more-icon'/>
        <span>See more</span>
    </div>
  )
}

export default SeeMore