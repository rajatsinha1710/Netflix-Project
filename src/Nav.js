import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, setShow] = useState(false)

    const showNavbar = () => {
        if(window.scrollY > 100){
            setShow(true)
        }
        else {
            setShow(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', showNavbar)
        return ()=> window.removeEventListener('scroll', showNavbar)
    },[])
  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <div className="nav-contents">
        <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix logo" className='nav-logo'/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" className='nav-avatar' />
        </div>      
    </div>
  )
}

export default Nav