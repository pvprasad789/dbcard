import React, { useState } from "react";
import TopBar from "../components/TopBar/TopBar";
import BasicContact from "../components/BasicContact/BasicContact.js";
import SocialNetwork from "../components/SocialNetwork/SocialNetwork.js";
// import MediaGallery from '../components/MediaGallery/MediaGallery'
// import VideoGallery from '../components/VideoGallery/VideoGallery'
// import Audio from '../components/Audio/Audio'
// import Document from '../components/Document/Document'

import "./Dashboard.css";

function Dashboard() {
  const [fullName, setFullName] = useState('Raki (Rakesh K Mudavath)');
  const [about, setAbout] = useState('[Your Name] is the Head of Marketing at Avows Technologies Indonesia, overseeing all marketing activities at the companys operational office. With a deep passion for the intersection of technology and business, [Your Name] has successfully spearheaded numerous marketing campaigns that have contributed to the growth and success of Avows Technologies in the Indonesian market. With extensive experience in branding, digital marketing, and strategic planning, [Your Name] thrives in developing innovative marketing strategies to elevate Avows Technologies presence and reach in the industry. Additionally, [Your Name] possesses exceptional leadership skills, enabling them to manage and inspire a high-performing marketing team. With an unwavering commitment to excellence, [Your Name] is dedicated to driving Avows Technologies Indonesia towards new heights of success through effective marketing initiatives.');

  let name = "raki";
  const [activeTab, setActiveTab] = useState("basicContact");
  return (
    <div className="main-div">
      <TopBar />
      <div className="profile">
        <div className="profile-card-url">
          <p className="mb-3 tx-10 profile-name">Personalized URL</p>
          <div>
            <p className="h6 mr-5">
              https://avows.link/<span className="name">{name}</span>
              <span>
                <i className="bi bi-pencil-square p-2"></i>
              </span>
            </p>
          </div>
          <div className="profile-btns">
            <button
              type="button"
              className="col-5 btn btn-outline-primary btn-sm"
            >
              Open
            </button>
            <button
              type="button"
              className="col-5 btn btn-outline-primary btn-sm"
            >
              Copy
            </button>
          </div>
        </div>
        <div className="profile-header">
          <div className="py-3 px-0 mb-4 have-dropdown">
            <div className="img-header upload-on-image choose-dropdown"></div>
          </div>
          <div className="py-3 px-0 mb-2 profile-image">
            <div
              id="custAvatar"
              className="avatars shadow upload-on-image"
            ></div>
          </div>
        </div>
        <div className="profile-card mb-3">
          <p className="label">Full Name</p>
          {/* <p className="fullName mt-4">{fullName}</p> */}
          <input type="text" className="form-control fullName" placeholder=""  value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
        </div>
        <div className="profile-card">
          <p className="label">About</p>
          <textarea className="form-control input-content-dashboard pt-4" rows="5" placeholder="Your Bio.." value={about} onChange={(e)=>setAbout(e.target.value)}/>
        </div>
      </div>

      <div className="profile-data">
        <div className="customize-header">
          <a href="/" className="edit-profile">
            <span>
              <i className="bi bi-pencil-square p-2"></i>
            </span>
            Edit Profile
          </a>
        </div>
        <div className="customize-data">
          <label className="cust-data-header">Customize your data</label>
          <label className="sub-header">
            You can add multiple types of data, please click on the tabs below
            to choose.
          </label>
          <ul className="nav-line">
            <li className="nav-item">
              <button
                className={
                  activeTab === "basicContact" ? "btn btn-success" : "btn"
                }
                onClick={() => setActiveTab("basicContact")}
              >
                Basic Contact
              </button>
            </li>
            <li className="nav-item">
              <button
                className={
                  activeTab === "socialNetwork" ? "btn btn-success" : "btn"
                }
                onClick={() => setActiveTab("socialNetwork")}
              >
                Socail Network
              </button>
            </li>
            <li className="nav-item">
              <button
                className={
                  activeTab === "mediaGallery" ? "btn btn-success" : "btn"
                }
                onClick={() => setActiveTab("mediaGallery")}
              >
                Media Gallery
              </button>
            </li>
            <li className="nav-item">
              <button
                className={
                  activeTab === "videoGallery" ? "btn btn-success" : "btn"
                }
                onClick={() => setActiveTab("videoGallery")}
              >
                Video Gallery
              </button>
            </li>
            <li className="nav-item">
              <button
                className={activeTab === "audio" ? "btn btn-success" : "btn"}
                onClick={() => setActiveTab("audio")}
              >
                Audio
              </button>
            </li>
            <li className="nav-item">
              <button
                className={activeTab === "document" ? "btn btn-success" : "btn"}
                onClick={() => setActiveTab("document")}
              >
                Document
              </button>
            </li>
          </ul>
          {activeTab === "basicContact" && <BasicContact />}
          {activeTab === "socialNetwork" && <SocialNetwork />}
          {/* {activeTab === 'mediaGallery' && <MediaGallery />}
                    {activeTab === 'videoGallery' && <VideoGallery />}
                    {activeTab === 'audio' && <Audio />}
                    {activeTab === 'document' && <Document />} */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
