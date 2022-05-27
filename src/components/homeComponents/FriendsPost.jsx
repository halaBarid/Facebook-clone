import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { MdOutlinePublic } from "react-icons/md";
import PostReaction from './PostReaction';
import './secondHomeColumn.css'

const FriendsPost = () => {
  return (
    <div>
        <div>
            <div className='profile'>
                <div className='profile-time'>
                    <img src="https://scontent.fcmn5-1.fna.fbcdn.net/v/t39.30808-1/236572038_561228358567942_2315009849390743563_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEL_52eCiEqBRkyvxuK516QYAn-J9_p5dZgCf4n3-nl1hI3JW6bugt-L3R8oUuyFnLmbb86RA3nOFDhzJHHlsif&_nc_ohc=A6tBkNQbJawAX9fQkBW&_nc_ht=scontent.fcmn5-1.fna&oh=00_AT-gqjnnGKougsN-IxuHGS0rzA9wyIDtw29aZIqgQOw14w&oe=62925A18" alt="" />
                    <div className='spans'>
                        <span>Hala Barid</span><br />
                        <span>19h</span><MdOutlinePublic/>
                    </div>
    
                </div>
                <div className='dots'>
                    <BsThreeDots/>
                </div>
            </div>
            <div className='img-post'>
                <p>Lorem ipsum dolor sit amet.</p>
                <img src="https://scontent.fcmn5-1.fna.fbcdn.net/v/t39.30808-6/284169260_5249110418482153_1919645836140830933_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeESJ09dqvlSOQyadzpQzEhgIbwehdYux0QhvB6F1i7HRLbUG4KTL8_6hBhNf03LyIffCd8Co394GfceoGrsN04F&_nc_ohc=rSM7NR5CgrsAX9yUKDv&_nc_oc=AQllPF5FCfYLKCoQC8hp1HzMuxcnG5LywlKv2UbkXUMI0MEUk0bpYoi0OzqdGRifmE4&_nc_zt=23&_nc_ht=scontent.fcmn5-1.fna&oh=00_AT8L_drDiibOk5lUn8hl5v0Zdd1ND5bhGIxgfiEJ7KOk7g&oe=6294FBBF" alt="" />
            </div>
        </div>
        <PostReaction/>
    </div>
  )
}

export default FriendsPost