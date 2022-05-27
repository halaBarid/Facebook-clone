import React from 'react'
import { AiOutlineLike, AiOutlineFileGif } from "react-icons/ai";
import { BiComment, BiSmile, BiSticker } from "react-icons/bi";
import { SiGravatar } from "react-icons/si";
import { MdOutlineAddAPhoto } from "react-icons/md";
import './secondHomeColumn.css'

const PostReaction = () => {
  return (
    <div className='post-reaction'>
        <hr />
        <div className='buttons'>
            <button className='btn'><AiOutlineLike/> Like</button>
            <button className='btn'><BiComment/>Comment</button>
        </div>
        <hr />
        <div className='comment'>
            <img src="https://scontent.fcmn5-1.fna.fbcdn.net/v/t39.30808-1/236572038_561228358567942_2315009849390743563_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEL_52eCiEqBRkyvxuK516QYAn-J9_p5dZgCf4n3-nl1hI3JW6bugt-L3R8oUuyFnLmbb86RA3nOFDhzJHHlsif&_nc_ohc=A6tBkNQbJawAX9fQkBW&_nc_ht=scontent.fcmn5-1.fna&oh=00_AT-gqjnnGKougsN-IxuHGS0rzA9wyIDtw29aZIqgQOw14w&oe=62925A18" alt="" />
            <div className='comment-input'>
                <input type="text" placeholder='Write a comment...' />
                <div>
                    <SiGravatar className='icon'/>
                    <BiSmile className='icon'/>
                    <MdOutlineAddAPhoto className='icon'/>
                    <AiOutlineFileGif className='icon'/>
                    <BiSticker className='icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostReaction