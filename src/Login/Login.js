import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TopBar from "../components/TopBar/TopBar";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [orgId, setOrgId] = useState("T12343");
  const [userName, setUserName] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [errorMsg, setErrorMsg] = useState("");
  console.log(errorMsg);
  const goToDashboard = async () => {
    if (userName !== "" && password !== "" && orgId !== "") {
      try {
        const getUserToken = {
          method: "POST",
          url: `http://localhost:3000/api/ca/usertoken`,
          headers: {
            "Content-Type": "application/json",
            tenantid: orgId,
          },
          data: { username: userName, password: password },
        };
        const response = await axios.request(getUserToken);
        console.log("*********response", response);
        const { data } = response;
        
        // let data = {
        //   status: "success",
        //   code: 200,
        //   message: "Authentication Successfully",
        //   authToken:
        //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6InUxMjM1Iiwicm9sZSI6IlRBIn0.eKPDPVMR-zxDOwTKNbiEj8jrbt0iuAmvryTdm1_bldI",
        //   userid: "admin",
        //   state: 1,
        //   tid: "T12343",
        //   roleid: "TA",
        // };

        JSON.stringify(data?.authToken);
        let token = data?.authToken.replaceAll('"', "");
        localStorage.setItem("dbcAuthToken", token);
        if (data.code === 200) {
          if (data.roleid === "TA") {
            navigate("/admindashboard");
          } else {
            navigate("/dashboard");
          }
        } else {
          console.log("*********error", data?.message);
        }
      } catch (error) {
        console.log("***********error", error);
        // navigate("/dashboard");
        // Handle errors
      }
    } else setErrorMsg("Please enter correct credentials and retry");
  };
  return (
    <div className="container-xxl">
      <TopBar />
      <div className="mt-5 container mx-auto h-auto md:w-1/3 bg-red-100">
        <div className="m-5 flex !flex-col justify-center">
          <input
            type="text"
            placeholder="Organization ID"
            className="btn-primary-outline mb-3"
            value={orgId}
            onChange={(e) => setOrgId(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="User name"
            className="btn-primary-outline mb-3"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="password"
            className="btn-primary-outline mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="btn-primary m-auto" onClick={() => goToDashboard()}>
            Login
          </button>
          <div className="flex justify-between m-4">
            <div className="col-md-6 pl-0">
              <a href="/" className="href-link">
                Forgot Password
              </a>
            </div>
            <div className="col-md-6 text-right">
              <a href="/" className="href-link">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
