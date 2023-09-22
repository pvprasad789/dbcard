import React, { useState } from 'react'
import './BasicContact.css'

const BasicContact = () => {
    const [phNumber, setphNumber] = useState('081297711991');
    const [email, setEmail] = useState('rakesh.m@avowstech.com');
    const [alternateEmail, setAlternateEmail] = useState('mudavath.rakesh@gmail.com');
    const [website, setwebsite] = useState('https://www.avowstech.com');
    const [occupation, setOccupation] = useState('Head of Marketing ');
    const [companyName, setCompanyName] = useState('Avows Technologies Indonesia (Operational Office)');
    const [companyAdd, setCompanyAdd] = useState('Jl. Dr. Ide Anak Agung Gde Agung Lot 5.1, Mega Kuningan, lt. 24, Menara Rajawali, Kuningan, Kuningan Tim., Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950, Indonesia');
    return (
        <>
            <div className='basic-contact-header p-3'>
                <p className='fs-12'>Tab Title</p>
                <div className='flex pb-3'>
                    <p className='h4 mr-2'>Basic contact</p>
                    <i className="bi bi-pencil-square p-1"></i>
                </div>
            </div>
            <div className='basic-contact-card'>
                <div className="basic-detail-card">
                    <p className="label">Full Name</p>
                    <input type="text" className="form-control basic-input pt-4 " placeholder="Your phone number"  value={phNumber} onChange={(e)=>setphNumber(e.target.value)}/>
                </div>
            </div>
            <div className='basic-contact-card'>
                <div className="basic-detail-card">
                    <p className="label">Email</p>
                    <input type="text" className="form-control basic-input pt-4 " placeholder="Your Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
            </div>
            <div className='basic-contact-card'>
                <div className="basic-detail-card">
                    <p className="label">Alternate Email</p>
                    <input type="text" className="form-control basic-input pt-4 " placeholder="Your Alternate Email"  value={alternateEmail} onChange={(e)=>setAlternateEmail(e.target.value)}/>
                </div>
            </div>
            <div className='basic-contact-card'>
                <div className="basic-detail-card">
                    <p className="label">Website</p>
                    <input type="text" className="form-control basic-input pt-4 " placeholder="Your Website"  value={website} onChange={(e)=>setwebsite(e.target.value)}/>
                </div>
            </div>
            <div className='basic-contact-card'>
                <div className="basic-detail-card mb-3">
                    <p className="label">Occupation</p>
                    <input type="text" className="form-control basic-input pt-4" placeholder="Your Occupation"  value={occupation} onChange={(e)=>setOccupation(e.target.value)}/>
                </div>
                <div className="basic-detail-card mb-3">
                    <p className="label">Company name</p>
                    <input type="text" className="form-control basic-input pt-4" placeholder="Your Company Name"  value={companyName} onChange={(e)=>setCompanyName(e.target.value)}/>
                </div>
                <div className="basic-detail-card">
                    <p className="label">Company Address</p>
                    <textarea className="form-control basic-input pt-4" rows="3" placeholder="Your Company Address" value={companyAdd} onChange={(e)=> setCompanyAdd(e.target.value) } />
                </div>
            </div>
        </>
    )
}
export default BasicContact;