import React, { useState } from 'react'
import { URL_LOGO } from './Utils/constant'
import { createContext } from 'react'
import "./Style/HeaderLogin.css"
import { Link } from 'react-router-dom'
import useOnlineStatus from './useOnlineStatus'
import UserContext from './Utils/UserContext'
import { useSelector } from 'react-redux'

const Header = () => {
  const status =useOnlineStatus()
  const [btnEvent,setBtnEvent] = useState("login")

  const nameData =createContext(UserContext)
  //We are subscribing to the sroe using selector here (REDUX TOOL KIT)
    const cartItems = useSelector((store)=>store.cart.items)
    console.log(cartItems)

  return (
    <div className="header h-20 flex justify-between items-center bg-white text-black font-normal shadow-lg shadow-gray-400">
    <div>
      <img
        className="logo w-24"
        src={URL_LOGO}
        alt="this is food image"
      />
    </div>
    <div className="nav-items">
      <ul className='flex p-4 m-4 items-center font-semibold'>
        <li className='px-6'>Online Status: {(status===true)? "✅ Active":"🔴 Offline"}</li>
        <li ><Link className='px-2' to="/">Home</Link></li>
        <li className='px-2'><Link className='link' to="/about">About</Link></li>
        <li className='px-2'><Link className='link' to="/contact">Contact</Link></li>
        <li className='px-2'><Link className='link' to="/grocery">Grocery</Link></li>
        <li className='px-2 font-bold'><Link className='link' to="/cart">Cart:[{cartItems.length}items]</Link></li>
        {/* <li className='px-2'>{nameData}</li> */}
        <button className='loginbtn px-6 py-2 bg-red-950 hover:bg-red-800 text-white border-l-2 rounded-md' onClick={()=>{btnEvent==="login"?setBtnEvent("logout"):setBtnEvent("login")}}>{btnEvent}</button>
      </ul>
    </div>
  </div>
  )
}

export default Header
