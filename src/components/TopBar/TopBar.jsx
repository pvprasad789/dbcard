import React from 'react'
import { useNavigate } from 'react-router-dom'
import './TopBar.css'
const TopBar=()=>{
    const navigate=useNavigate()
    const doLogout=()=>{
        navigate('/')
    }
    return(
        <div className='container-fluid top-bar d-flex '>
            {/* <div className='header img'></div> */}
            <img src="https://www.avowstech.com/wp-content/uploads/2022/07/cropped-Mask-Group-26.png" class="img-fluid" alt="Avows Logo"></img>
            <button className='btn text-white' onClick={()=>doLogout()}>Logout</button>
        </div>
    )
}
export default TopBar