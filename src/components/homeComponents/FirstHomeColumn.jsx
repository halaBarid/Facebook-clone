import React from 'react'
import './firstHomeColumn.css'
import { FaUserFriends,FaStore } from "react-icons/fa";
import { MdGroups,MdOndemandVideo} from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import SeeMore from './SeeMore';
const FirstHomeColumn = () => {
  return (
    <div className='first-home-column col-md-3'>
      <div className='profile entertainment'>
        <img src="https://scontent.fcmn5-1.fna.fbcdn.net/v/t39.30808-1/236572038_561228358567942_2315009849390743563_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEL_52eCiEqBRkyvxuK516QYAn-J9_p5dZgCf4n3-nl1hI3JW6bugt-L3R8oUuyFnLmbb86RA3nOFDhzJHHlsif&_nc_ohc=A6tBkNQbJawAX9fQkBW&_nc_ht=scontent.fcmn5-1.fna&oh=00_AT-gqjnnGKougsN-IxuHGS0rzA9wyIDtw29aZIqgQOw14w&oe=62925A18" alt="" />
        <span>Hala Barid</span>
      </div>
      <div className='entertainment'>
        <FaUserFriends className='icon'/>
        <span>Friends</span>
      </div>
      <div className='entertainment'>
        <FaStore className='icon'/>
        <span>Marketplace</span>
      </div>
      <div className='entertainment'>
        <MdGroups className='icon'/>
        <span>Groups</span>
      </div>
      <div className='entertainment'>
        <MdOndemandVideo className='icon'/>
        <span>Watch</span>
      </div>
      <div className='entertainment'>
        <AiOutlineFieldTime className='icon'/>
        <span>Memories</span>
      </div>
      <div className='entertainment'>
        <SeeMore/>
      </div>
      <hr />
      <h4>Your shortcuts</h4>
      <div className='entertainment'>
        <img src="https://scontent.fcmn5-1.fna.fbcdn.net/v/t39.2081-6/42961641_481744612333089_8200073263716499456_n.png?stp=c1.1.72.72a_dst-png_p72x72&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_eui2=AeErBKNmEb1L61OuYluoeCyrFXh0v9FJo48VeHS_0Umjj-8NYlR52VzOPVP8NeYA7mOXJeYPYcvOUkHnsiWfNTv9&_nc_ohc=9-2uaO7f6qwAX-Tm9v0&_nc_ht=scontent.fcmn5-1.fna&oh=00_AT_TJWolVK4Ie89ymJOr1DdwpBmKxPSc8A8f0KoMZR-LXw&oe=6291A935" alt="" />
        <span>OMG</span>
      </div>
      <div className='entertainment'>
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeGzqm3qWohyuj2TU85cf1iEZ3xAUM5_bWpnfEBQzn9tagWoUUJOi4jdznwSscui5coj3yxRNb92UIJ-lDZLqLTH" alt="" />
        <span>Covoiturage</span>
      </div>
      <div className='entertainment'>
        <img src="https://scontent.fcmn5-1.fna.fbcdn.net/v/t39.2081-6/42630609_2166936443330818_3464735768197464064_n.png?stp=c1.1.72.72a_dst-png_p72x72&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_eui2=AeEKBVsG8pQnzf5bwtaTnZh3kGwkPrvJAp6QbCQ-u8kCnjARUholZf88IiNwzfCYMoedELlvPXOfvfYqcS7QX3nO&_nc_ohc=Brk0BjJHRt8AX8K-VKs&_nc_oc=AQk7kN0bj06rTVq5AqsMqoVUdkFeZ41b3HaXB-2logAJPU1rV8FD8fTqKdehyDq6auk&_nc_ht=scontent.fcmn5-1.fna&oh=00_AT-sT7IxGVBY9lRXLN-vjii92JygNnO9ItGrFrTW1SX7rQ&oe=6292D6AF" alt="" />
        <span>8 Ball Pool</span>
      </div>
      <div className='entertainment'>
        <img src="https://scontent.fcmn5-1.fna.fbcdn.net/v/t39.2081-6/11057107_483504688467002_1460985830_n.png?stp=c1.1.72.72a_dst-png_p72x72&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_eui2=AeG9yQjIWNPGruPhUB8VBwl-Koke__Hub3sqiR7_8e5ve-gcR7-KdPYVBfM1rEk8OQi2g-ymY49meyoaOYprEEhw&_nc_ohc=PMFLm2Xj8p0AX9uLgKP&_nc_ht=scontent.fcmn5-1.fna&oh=00_AT_A_qG7HkPX6WjuK80mHha5Us62QyazAGz5-2ikNMqT_Q&oe=62942115" alt="" />
        <span>Gin Rummy Plus</span>
      </div>
      <div className='entertainment'>
        <SeeMore/>
      </div>
    </div>
  )
}

export default FirstHomeColumn