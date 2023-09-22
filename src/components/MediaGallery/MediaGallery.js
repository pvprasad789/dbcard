import React, { useState } from 'react'
import './MediaGallery.css'

const MediaGallery = () => {
    return (
        <>
            <div className='basic-contact-header'>
                <p>Tab Title</p>
                <div className='tab-head'>
                    <h4 className='mr-2'>Basic contact</h4>
                    <i className="bi bi-pencil-square p-1"></i>
                </div>
            </div>
            <div className='basic-contact'>
                <div className='w-100'>
                    <div className='detail-block'>
                        <p >Phone Number</p>
                        <i className="bi bi-pencil-square p-1"></i>
                    </div>
                    <input type="number" readOnly="true" className="input-content active" placeholder="Your Phone Number" value="081297711991" />
                </div>
            </div>
            <div className='basic-contact'>
                <div className='w-100'>
                    <div className='detail-block'>
                        <p >Email</p>
                        <i className="bi bi-pencil-square p-1"></i>
                    </div>
                    <input type="email" readOnly="true" className="input-content active" placeholder="Email" value="rakesh.m@avowstech.com" />
                </div>
            </div>
            <div className='basic-contact'>
                <div className='w-100'>
                    <div className='detail-block'>
                        <p>Alternate Email</p>
                        <i className="bi bi-pencil-square p-1"></i>
                    </div>
                    <input type="email" readOnly="true" className="input-content active" placeholder="Alternate Email" value="mudavath.rakesh@gmail.com" />
                </div>
            </div>
            <div className='basic-contact'>
                <div className='w-100'>
                    <div className='detail-block'>
                        <p className="label">Website</p>
                        <i className="bi bi-pencil-square p-1"></i>
                    </div>
                    <input type="url" readOnly="true" className="input-content active" placeholder="Your Website" value="https://www.avowstech.com" />
                </div>
            </div>
            <div className='basic-contact'>
                <div className='detail-block-details w-100'>
                    <div className='detail-block'>
                        <p className="label" data-label="NmpndWJiOW45N0c1TUxkZGpjWEpOZz09">Occupation</p>
                        <i className="bi bi-pencil-square p-1"></i>
                    </div>
                    <input type="text" readOnly="true" className="input-content active" placeholder="" value="Head of Marketing" data-origin="081297711991" data-type="MFBqaktGbjRQY0RBWEorUlJPZHBQdz09" data-t="ZEQ5eUUzZ3pNYlloejlYRlRZazRMUT09" data-c="eG1TcW1hUE5SOGdFcVliRS9kQ1RZUT09" data-wk="ek04SGxkTGcyRFdDTE5MNWlSUk1WUT09" data-wv="aDdKamJoT2RzYi9qV3R1VUphWlpkdz09" />
                </div>
                <div className='detail-block-details w-100'>
                    <div className='detail-block'>
                        <p className="label" data-label="NmpndWJiOW45N0c1TUxkZGpjWEpOZz09">company name</p>
                        <i className="bi bi-pencil-square p-1"></i>
                    </div>
                    <input type="text" readOnly="true" className="input-content active" placeholder="" value="Avows Technologies Indonesia (Operational Office)" data-origin="081297711991" data-type="MFBqaktGbjRQY0RBWEorUlJPZHBQdz09" data-t="ZEQ5eUUzZ3pNYlloejlYRlRZazRMUT09" data-c="eG1TcW1hUE5SOGdFcVliRS9kQ1RZUT09" data-wk="ek04SGxkTGcyRFdDTE5MNWlSUk1WUT09" data-wv="aDdKamJoT2RzYi9qV3R1VUphWlpkdz09" />
                </div>
                <div className='detail-block-details w-100'>
                    <div className='detail-block'>
                        <p>Company Address</p>
                        <i className="bi bi-pencil-square p-1"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MediaGallery;