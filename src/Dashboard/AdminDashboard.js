import React, { useState, useEffect } from "react";
// import axios from "axios";
import TopBar from "../components/TopBar/TopBar";
import "./AdminDashboard.css";
import UsersTable from "./UsersTable";

function AdminDashboard() {
  const [orgName, setOrgName] = useState("");
  const [orgPhNo, setOrgPhNo] = useState("");
  const [orgEmail, setOrgEmail] = useState("");
  const [orgWebSite, setOrgWebSite] = useState("");
  const [orgAdd, setOrgAdd] = useState("");
  const [usersData, setUsersData] = useState([]);
  // const [orgData, setOrgData] = useState([]);

  const token = localStorage.getItem("dbcAuthToken");
  console.log("***********Bearer token", `Bearer ${token}`);
  // let id = "u1234";
  // let orgId = "T12343";

  useEffect(() => {
    tenantUserList();
    tenantCardList();
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
        email: "admin@avowstech.com",
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
  const tenantCardList = async () => {
    // const getTenantCardList = {
    //   method: 'POST',
    //   url: `https://avows.ngrok.app/api/admin/tenantcardList`,
    //   headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${token}`
    //   },
    //   data: {"tenant_id": orgId, "id": id}
    // }
    // const usersData = await axios.request(getTenantCardList);
    let resUsersData = [
      {
          "mobilenumber": "9550593583",
          "fullname": "avowsadmin",
          "cardnumber": "1111111111111111",
          "cstatus": 1,
          "actionn": 1,
          "userid": "u1235",
          "tenantid": "T12343",
          "id": "u1235",
          "username": "admin",
          "passwd": "admin",
          "state": 1,
          "email": "admin@avowstech.com",
          "roleid": "TA"
      }
  ]
    setUsersData(resUsersData)
    console.log("***********tenantUserList", resUsersData);
  };
  return (
    <div className="container-fluid">
      <TopBar />
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-md-3 col-sm-12 mt-4">
            <div>
              <label className="mb-1 text-muted text-black-50 text-bold text-secondary">
                Welcome Captain Demo
              </label>
              <h5 className="text-xl">Organization Data</h5>
            </div>
            <div className="profile-header">
              <h6 className="mt-4 mb-1 text-muted"><small>Organization Header</small></h6>
              <div className="py-3 px-0 mb-4 have-dropdown">
                <div className="img-fluid admin-img-header upload-on-image choose-dropdown"></div>
              </div>
            </div>
            <div className="profile-card mb-3">
              <p className="label mb-5">Organization Name</p>
              <input
                type="text"
                className="form-control fullName pt-4"
                placeholder=""
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
              />
            </div>
            <div className="profile-card mb-3">
              <p className="label mb-5">Organization Phone Number</p>
              <input
                type="text"
                className="form-control fullName pt-4"
                placeholder=""
                value={orgPhNo}
                onChange={(e) => setOrgPhNo(e.target.value)}
              />
            </div>
            <div className="profile-card mb-3">
              <p className="label mb-5">Organization Email</p>
              <input
                type="text"
                className="form-control fullName pt-4"
                placeholder=""
                value={orgEmail}
                onChange={(e) => setOrgEmail(e.target.value)}
              />
            </div>
            <div className="profile-card mb-3">
              <p className="label mb-5">Organization Website</p>
              <input
                type="text"
                className="form-control fullName pt-4"
                placeholder=""
                value={orgWebSite}
                onChange={(e) => setOrgWebSite(e.target.value)}
              />
            </div>
            <div className="profile-card mb-3">
              <p className="label mb-5">Organization Address</p>
              <input
                type="text"
                className="form-control fullName pt-4"
                placeholder=""
                value={orgAdd}
                onChange={(e) => setOrgAdd(e.target.value)}
              />
            </div>
            <div className="profile-card mb-3">
              <p className="label mb-5">Organization Address</p>
              <input
                type="text"
                className="form-control fullName pt-4"
                placeholder=""
                value={orgAdd}
                onChange={(e) => setOrgAdd(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-9 col-sm-12 mt-2 bcard">
            <div className="d-flex justify-content-between">
              <div className="col-sm-7 pt-4">
                <h4>Business Card List</h4>
                <p className="text-muted mb-4">
                  Manage your card by click the action button
                </p>
              </div>
              <div className="col-sm-5 my-4 mx-2  d-flex justify-content-end">
                <button className="btn btn-primary btn-md m-2">ADD NEW CARD</button>
                <button className="btn btn-primary btn-md m-2">IDENTIFY CARD</button>
              </div>
            </div>
            <div>
              <button className="btn btn-secondary btn-sm">Excel</button>
              <button className="btn btn-secondary btn-sm mx-1">PDF</button>
              <button className="btn btn-secondary btn-sm">Print</button>
              <UsersTable usersData= {usersData}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
