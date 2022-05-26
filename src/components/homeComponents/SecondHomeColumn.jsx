import React from 'react'
import FriendsPost from './FriendsPost'
import Post from './Post'
import Stories from './Stories'

const SecondHomeColumn = () => {
  return (
    <div className='second-home-column col-md-5'>
      <div className='stories'>
          <Stories/>
          <Stories/>
          <Stories/>
          <Stories/>
        </div>
        <div className="post">
          <Post/>
        </div>
        <div className='friends-post'>
          <FriendsPost/>    
        </div>
        <div className='friends-post'>
          <FriendsPost/>    
        </div>
        <div className='friends-post'>
          <FriendsPost/>    
        </div>
        <div className='friends-post'>
          <FriendsPost/>    
        </div>
        <div className='friends-post'>
          <FriendsPost/>    
        </div>
        <div className='friends-post'>
          <FriendsPost/>    
        </div>
    </div>
    
  )
}

export default SecondHomeColumn