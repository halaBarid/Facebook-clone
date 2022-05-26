import React from 'react'
import { CgMenuGridO } from "react-icons/cg";
import { BsMessenger} from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import './thirdComponent.css'

const ThirdColumn = () => {
  return (
    <div className='third-component col-md-4'>
        <div className="profile">
            <img src='https://scontent.fcmn5-1.fna.fbcdn.net/v/t39.30808-1/236572038_561228358567942_2315009849390743563_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEL_52eCiEqBRkyvxuK516QYAn-J9_p5dZgCf4n3-nl1hI3JW6bugt-L3R8oUuyFnLmbb86RA3nOFDhzJHHlsif&_nc_ohc=A6tBkNQbJawAX9fQkBW&_nc_ht=scontent.fcmn5-1.fna&oh=00_AT-gqjnnGKougsN-IxuHGS0rzA9wyIDtw29aZIqgQOw14w&oe=62925A18' alt="" />
            <span>Hala</span>
        </div>
        <div className="dropdowns">
            <a href=""><CgMenuGridO/></a>
            <a href=""><BsMessenger/></a>
            <a href=""><IoMdNotifications/></a>
            <a href=""><IoMdArrowDropdown/></a>
        </div>
    </div>
  )
}

export default ThirdColumn