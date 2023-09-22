import React from 'react'
import { useNavigate } from 'react-router-dom'
import './TopBar.css'
const TopBar=()=>{
    const navigate=useNavigate()
    const doLogout=()=>{
        navigate('/')
    }
    return(
        <div className='top-bar'>
            <div className='header'></div>
            <button className='logout' onClick={()=>doLogout()}>Logout</button>
        </div>
    )
}
export default TopBar