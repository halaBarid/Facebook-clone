import React from 'react'
import './thirdHomeColumn.css'
import { BiDotsHorizontalRounded, BiSearch } from 'react-icons/bi'
import { BsCameraVideoFill, BsGift } from 'react-icons/bs'
import OnlineFriend from './OnlineFriend'

const ThirdHomeColumn = () => {
  return (
    <div className='third-home-column col-md-4'>
     <div className='friend-request'>
        <div className='header'>
          <h4>Friend request</h4>
          <span><a href="">See all</a></span>
        </div>
        <div className='request-info'>
            <div className='img-buttons'>
              <div>
                <img src="https://scontent.frak3-1.fna.fbcdn.net/v/t31.18172-1/13669391_1746996745583559_7572731138293938270_o.jpg?stp=c21.0.80.80a_cp0_dst-jpg_p80x80&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFuhJBOxW7H61nZVrC9M_xVrRj9j0VMhnmtGP2PRUyGeUvLye6CPMRi1sNj2ze9XQt9zM51-2Dzawi52S5TyVUN&_nc_ohc=SaSXHfbL5Z8AX9yz3nz&_nc_ht=scontent.frak3-1.fna&oh=00_AT-L_M6y0PiFeObNqb2_bptVz-SBMUm1BqzNTERPvcB-pg&oe=62B704D4" alt="" />
              </div>
              <div className='buttons'>
                <p>Jack Buch</p>
                <button className='confirm'>Confirm</button>
                <button className='delete'>Delete</button>
              </div>
            </div>
          <div>
            <div>3d</div>
          </div>
        </div>
        
     </div>
    <hr />
    <div className='birthday'>
      <h4>Birthdays</h4>
      <div className='birthday-info'>
        <BsGift className='icon'/> <p><span>Joe Barid</span> have birthday today.</p>
      </div>
    </div>
    <hr />
    <div className='contact'>
      <div className="contact-header">
        <div>
          <h4>Contact</h4>
        </div>
        <div>
          <BsCameraVideoFill className='icon'/>
          <BiSearch className='icon'/>
          <BiDotsHorizontalRounded className='icon'/>
        </div>
      </div>
      <div >
        <OnlineFriend/>
        <OnlineFriend/>
        <OnlineFriend/>
        <OnlineFriend/>
        <OnlineFriend/>
        <OnlineFriend/>
        <OnlineFriend/>
        <OnlineFriend/>
        <OnlineFriend/>
        <OnlineFriend/>
        <OnlineFriend/>
        <OnlineFriend/>
        <OnlineFriend/>
        <OnlineFriend/>
        <OnlineFriend/>
        <OnlineFriend/>
        <OnlineFriend/>
        <OnlineFriend/>
        <OnlineFriend/>
        <OnlineFriend/>
        <OnlineFriend/>
      </div>
    </div>
    </div>
  )
}

export default ThirdHomeColumn