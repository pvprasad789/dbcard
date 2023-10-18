import React from 'react'
import { useNavigate } from 'react-router-dom'
import './TopBar.css'
const TopBar=()=>{
    const navigate=useNavigate()
    const doLogout=()=>{
        navigate('/')
    }
    return(
        <nav className='container-xxl flex sticky top-0 justify-between h-12 bg-[url("https://www.avowstech.com/wp-content/uploads/2022/07/Group-232.png")] bg-cover bg-no-repeat bg-center'>
            <img src="https://www.avowstech.com/wp-content/uploads/2022/07/cropped-Mask-Group-26.png" className='m-2' alt="Avows Logo"></img>
            <button className='text-white me-3' onClick={()=>doLogout()}>Logout</button>
        </nav>
    )
}
export default TopBar