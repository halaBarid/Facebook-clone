import React from 'react'
import './secondColumn.css'
import {AiFillHome} from "react-icons/ai";
import { MdOndemandVideo} from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { SiFacebookgaming } from "react-icons/si";

const SecondColumn = () => {
  return (
    <div className='second-column col-md-5'>
        <ul>
            <li>
                <a className='active' href="/"><AiFillHome/></a>
            </li>
            <li>
                <a href="/"><MdOndemandVideo/></a>
            </li>
            <li>
                <a href="/"><FaStore/></a>
            </li>
            <li>
                <a href="/"><MdGroups/></a>
            </li>
            <li>
                <a href="/"><SiFacebookgaming/></a>
            </li>
        </ul>
    </div>
  )
}

export default SecondColumn