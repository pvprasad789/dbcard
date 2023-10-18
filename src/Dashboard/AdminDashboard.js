import React, { useState, useEffect } from "react";
import axios from "axios";
import TopBar from "../components/TopBar/TopBar";
import admin from '../assets/admin.png'
import "./AdminDashboard.css";
import UsersTable from "./UsersTable";

function AdminDashboard() {
  const [orgName, setOrgName] = useState("");
  const [orgPhNo, setOrgPhNo] = useState("");
  const [orgEmail, setOrgEmail] = useState("");
  const [orgWebSite, setOrgWebSite] = useState("");
  const [orgAdd, setOrgAdd] = useState("");
  const [usersData, setUsersData] = useState([]);
  const token = localStorage.getItem("dbcAuthToken");

  console.log("***********Bearer token", `Bearer ${token}`);
  let orgId = "T12343";
  // let roleId = "TA";

  useEffect(() => {
    tenantUserList();
    tenantCardList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const tenantUserList = async () => {
    const getTenantUserList = {
      method: 'POST',
      url: `http://localhost:3000/api/admin/tenantUserList`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      data: { "tenant_id": orgId }
    }
    let respo = await axios.request(getTenantUserList);
    const { data: res } = respo;
    // let res = [
    //   {
    //     sid: "T1234",
    //     tenant_id: "T12343",
    //     sname: "AVOWS TECHNOLOGIES SDN BHD",
    //     mobilenumber: "9550593583",
    //     email: "admin@avowstech.com",
    //     website: "WWW.AVOWSTECH.COM",
    //     address:
    //       "Unit 15-06, Tower A, The Vertical Business Suite Avenue 3, Bangsar South, No, 8, Jalan Kerinchi, 59200 Kuala Lumpur",
    //     timezone: "UTC +8",
    //     lat: "3.1144903950834046",
    //     long: " 101.66420997651448",
    //   },
    // ];
    console.log("***********tenantUserList", res);
    setOrgName(res[0]?.sname);
    setOrgPhNo(res[0]?.mobilenumber);
    setOrgEmail(res[0]?.email);
    setOrgWebSite(res[0]?.website);
    setOrgAdd(res[0]?.address);
  };
  const tenantCardList = async () => {
    // const getTenantCardList = {
    //   method: 'POST',
    //   url: `http://localhost:3000/api/admin/tenantcardList`,
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${token}`
    //   },
    //   data: { "tenant_id": orgId, "roleid": roleId }
    // }
    // let tenantCardResponse = await axios.request(getTenantCardList);
    // const {data : tenantCardRes} = tenantCardResponse;
    let tenantCardRes = [
      {
        mobilenumber: "9550593583",
        fullname: "avowsadmin",
        cardnumber: "1111111111111111",
        cstatus: 1,
        actionn: 1,
        userid: "u1235",
        tenantid: "T12343",
        id: "u1235",
        username: "admin",
        passwd: "admin",
        state: 1,
        email: "admin@avowstech.com",
        roleid: "TA",
      },
    ];
    console.log("***********tenantCardRes", tenantCardRes);
    setUsersData(tenantCardRes);
  };
  return (
    <div className="container-xxl">
      <TopBar />
      <div className="container-xxl">
        <div className="grid grid-cols-12">
          <div className="sm:col-span-3 col-span-12 ms-3 mt-3">
            <div>
              <label className="text-slate-500 text-bold mb-1">
                Welcome Captain Demo
              </label>
              <h5 className="text-xl">Organization Data</h5>
            </div>
            <div className="">
              <h6 className="text-muted mb-1 mt-4">
                <small>Organization Header</small>
              </h6>
              <img class="h-auto max-w-full" src={admin} alt="description" />
            </div>
            <div class="relative h-14 w-full mb-3">
              <input
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-sky-50  px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Organization Name
              </label>
            </div>
            <div class="relative h-14 w-full mb-3">
              <input
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-sky-50  px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                value={orgPhNo}
                onChange={(e) => setOrgPhNo(e.target.value)}
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Organization Phone Number
              </label>
            </div>
            <div class="relative h-14 w-full mb-3">
              <input
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-sky-50  px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                value={orgEmail}
                onChange={(e) => setOrgEmail(e.target.value)}
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Organization Email
              </label>
            </div>
            <div class="relative h-14 w-full mb-3">
              <input
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-sky-50  px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                value={orgWebSite}
                onChange={(e) => setOrgWebSite(e.target.value)}
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Organization website
              </label>
            </div>
            <div class="relative h-14 w-full">
              <input
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-sky-50  px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                value={orgAdd}
                onChange={(e) => setOrgAdd(e.target.value)}
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Organization Address
              </label>
            </div>
          </div>
          <div className="sm:col-span-9 col-span-12 bg-sky-50 mx-3 ps-3
          ">
            <div className="flex justify-between">
              <div className="col-span-7 pt-3">
                <h4 className="text-lg">Business Card List</h4>
                <p className="text-slate-500 text-sm mb-4">
                  Manage your card by click the action button
                </p>
              </div>
              <div className="col-span-5 flex justify-end mx-2 my-4">
                <button className="btn-primary">
                  ADD NEW CARD
                </button>
                <button className="btn-primary">
                  IDENTIFY CARD
                </button>
              </div>
            </div>
            <div>
              <button className="btn-secondary">Excel</button>
              <button className="btn-secondary">PDF</button>
              <button className="btn-secondary">Print</button>
              <UsersTable usersData={usersData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;