import React from 'react'
import FirstColumn from './navbarColumns/FirstColumn'
import SecondColumn from './navbarColumns/SecondColumn'
import ThirdColumn from './navbarColumns/ThirdColumn'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar container'>
        <div className="row">
            <FirstColumn/>
            <SecondColumn/>
            <ThirdColumn/>
        </div>
    </div>
  )
}

export default Navbar