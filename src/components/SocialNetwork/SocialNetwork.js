import React, { useState } from 'react'
import './SocialNetwork.css'

const SocialNetwork = () => {
    const [linkedinName, setLinkedinName] = useState('in/rakeshkmudavath')
    const [instagramName, setInstagramName] = useState('rakeshkmudavath')
    const [whatsappNum, setWhatsappNum] = useState('081297711991')
    return (
        <>
            <div className='social-network-header'>
                <div className='p-3'>
                    <p className='fs-12'>Tab Title</p>
                    <div className='tab-head'>
                        <p className='h4 mr-1'>Social Network</p>
                        <i className="bi bi-pencil-square p-1"></i>
                    </div>
                </div>
                <button type="button" className="btn btn-primary btn-lg m-0 w-100" >ADD LINK</button>
            </div>
            <div className='social-network-card'>
                <div className='social-detail-block'>
                    <i style={{color:'#1782C2'}} className="bi bi-linkedin p-1"></i>
                    <p className=''>Linkedin</p>
                </div>
                <div className="social-network-sub-block">
                    <p className="label">https://www.linkedin.com/</p>
                    <input type="text" className="form-control social-detail-card pt-4 " placeholder="Your phone number"  value={linkedinName} onChange={(e)=>setLinkedinName(e.target.value)}/>
                </div>
            </div>
            <div className='social-network-card'>
                <div className='social-detail-block'>
                    <i style={{color:'#FD2E7F'}} className="bi bi-instagram p-1"></i>
                    <p className=''>Instagram</p>
                </div>
                <div className="social-network-sub-block">
                    <p className="label">https://www.instagram.com/</p>
                    <input type="text" className="form-control social-detail-card pt-4 " placeholder="Your instagram name"  value={instagramName} onChange={(e)=>setInstagramName(e.target.value)}/>
                </div>
            </div>
            <div className='social-network-card'>
                <div className='social-detail-block'>
                    <i style={{color:'#5BCE5E'}} className="bi bi-whatsapp p-1"></i>
                    <p className=''>Whatsapp</p>
                </div>
                <div className="social-network-sub-block">
                    <p className="label">https://www.wa.me/</p>
                    <input type="text" className="form-control social-detail-card pt-4 " placeholder="Your whatsapp number"  value={whatsappNum} onChange={(e)=>setWhatsappNum(e.target.value)}/>
                </div>
            </div>
        </>
    )
}
export default SocialNetwork;