import React, { useState, useEffect } from "react";
// import axios from "axios";
import TopBar from "../components/TopBar/TopBar";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [orgName, setOrgName] = useState('');
  const [orgPhNo, setOrgPhNo] = useState('');
  const [orgEmail, setOrgEmail] = useState('');
  const [orgWebSite, setOrgWebSite] = useState('');
  const [orgAdd, setOrgAdd] = useState('');

  // const [orgData, setOrgData] = useState([]);
  
  const token = localStorage.getItem("dbcAuthToken");
  console.log("***********Bearer token", `Bearer ${token}`);
  // let id = "u1234";
  // let orgId = "T12343";

  useEffect(() => {
    tenantUserList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const tenantUserList = async () => {
    // const getTenantUserList = {
    //   method: 'POST',
    //   url: `https://avows.ngrok.app/api/admin/tenantUserList`,
    //   headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${token}`
    //   },
    //   data: {"tenant_id": orgId, "id": id}
    // }
    // const res = await axios.request(getTenantUserList);
    let res = [
      {
        sid: "T1234",
        tenant_id: "T12343",
        sname: "AVOWS TECHNOLOGIES SDN BHD",
        mobilenumber: "9550593583",
        email: 'admin@avowstech.com',
        website: "WWW.AVOWSTECH.COM",
        address:
          "Unit 15-06, Tower A, The Vertical Business Suite Avenue 3, Bangsar South, No, 8, Jalan Kerinchi, 59200 Kuala Lumpur",
        timezone: "UTC +8",
        lat: "3.1144903950834046",
        long: " 101.66420997651448",
      },
    ];
    setOrgName(res[0]?.sname);
    setOrgPhNo(res[0]?.mobilenumber);
    setOrgEmail(res[0]?.email);
    setOrgWebSite(res[0]?.website);
    setOrgAdd(res[0]?.address);
    console.log("***********tenantUserList", res);
  };
  return (
    <div className="main-div">
      <TopBar />
      <div className="profile">
        <div>
          <label className="mb-1 text-muted">Welcome Captain Demo</label>
          <h5>Organization Data</h5>
        </div>
        <div className="profile-header">
          <small className="mb-1 text-muted fs-8">Organization Header</small>
          <div className="py-3 px-0 mb-4 have-dropdown">
            <div className="admin-img-header upload-on-image choose-dropdown"></div>
          </div>
        </div>
        {/* <div className="profile-card mb-3">
          <small className="text-muted">Full Name</small>
          <input
            type="text"
            className="form-control fullName"
            placeholder=""
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
          />
        </div> */}
        <div className="profile-card mb-3">
          <p className="label mb-5">Organization Name</p>
          <input type="text" className="form-control fullName pt-4" placeholder=""  value={orgName} onChange={(e)=>setOrgName(e.target.value)}/>
        </div>
        <div className="profile-card mb-3">
          <p className="label mb-5">Organization Phone Number</p>
          <input type="text" className="form-control fullName pt-4" placeholder=""  value={orgPhNo} onChange={(e)=>setOrgPhNo(e.target.value)}/>
        </div>
        <div className="profile-card mb-3">
          <p className="label mb-5">Organization Email</p>
          <input type="text" className="form-control fullName pt-4" placeholder=""  value={orgEmail} onChange={(e)=>setOrgEmail(e.target.value)}/>
        </div>
        <div className="profile-card mb-3">
          <p className="label mb-5">Organization Website</p>
          <input type="text" className="form-control fullName pt-4" placeholder=""  value={orgWebSite} onChange={(e)=>setOrgWebSite(e.target.value)}/>
        </div>
        <div className="profile-card mb-3">
          <p className="label mb-5">Organization Address</p>
          <input type="text" className="form-control fullName pt-4" placeholder=""  value={orgAdd} onChange={(e)=>setOrgAdd(e.target.value)}/>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
