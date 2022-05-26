import React from 'react'
import './secondHomeColumn.css'
import { FaVideo, FaPhotoVideo } from "react-icons/fa";
import { CgSmileMouthOpen } from 'react-icons/cg';

const Post = () => {
  return (
        <div className='post'>
            <div className='input'>
                <img src="https://scontent.fcmn5-1.fna.fbcdn.net/v/t39.30808-1/236572038_561228358567942_2315009849390743563_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEL_52eCiEqBRkyvxuK516QYAn-J9_p5dZgCf4n3-nl1hI3JW6bugt-L3R8oUuyFnLmbb86RA3nOFDhzJHHlsif&_nc_ohc=A6tBkNQbJawAX9fQkBW&_nc_ht=scontent.fcmn5-1.fna&oh=00_AT-gqjnnGKougsN-IxuHGS0rzA9wyIDtw29aZIqgQOw14w&oe=62925A18" alt="" />
                <input type="text" placeholder="What's on your mind, Hala?"/>
           </div>
           <hr />
            <div className='upload'>
                <div className='uplod-media'>
                    <FaVideo className='live'/>
                    <span>Live video</span>
                </div>
                <div className='uplod-media'>
                    <FaPhotoVideo className='photo'/>
                    <span>Photo/video</span>
                </div>
                <div className='uplod-media'>
                    <CgSmileMouthOpen className='activity'/> 
                    <span>Feeling/activity</span>
                </div>
            </div>    
        </div>
         
  )
}

export default Post