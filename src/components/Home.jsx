import React from 'react'
import './home.css'
import FirstHomeColumn from './homeComponents/FirstHomeColumn'
import SecondHomeColumn from './homeComponents/SecondHomeColumn'
import ThirdHomeColumn from './homeComponents/ThirdHomeColumn'

const Home = () => {
  return (
    <div className='home container'>
        <div className="row">
            <FirstHomeColumn/>
            <SecondHomeColumn/>
            <ThirdHomeColumn/>
        </div>
    </div>
  )
}

export default Home