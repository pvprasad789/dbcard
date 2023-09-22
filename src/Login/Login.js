import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TopBar from '../components/TopBar/TopBar';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const [orgId, setOrgId] = useState("T12343");
    const [userName, setUserName] = useState("admin");
    const [password, setPassword] = useState("admin");
    const [errorMsg, setErrorMsg] = useState("");
    let dbcAuthToken = useRef('');
    let id = "u1234";
    console.log(errorMsg);  
    const goToDashboard = async () => {
        if (userName !== "" && password !== "" && orgId !== "") {
            try {
                const getUserToken = {
                    method: 'POST',
                    url: `https://avows.ngrok.app/api/ca/usertoken`,
                    headers: {
                        'Content-Type': 'application/json',
                        'tenantid': orgId
                    },
                    data: { 'username': userName, 'password': password }
                }
                const response = await axios.request(getUserToken);
                const {data} = response;
                localStorage.setItem('dbcAuthToken', JSON.stringify(data?.authToken));
                dbcAuthToken.current = localStorage.getItem('dbcAuthToken');
                console.log('*********dbcAuthToken local', localStorage.getItem('dbcAuthToken'));
                console.log('*********response.code', response.code);
                if (response.code === 200) {
                    navigate('/dashboard');
                } else {
                    console.log('*********error', response?.message);
                }
                const token = dbcAuthToken.current.replaceAll('"',"")
                const getTenantUserList = {
                    method: 'POST',
                    url: `https://avows.ngrok.app/api/admin/tenantUserList`,
                    headers: { 
                        'Content-Type': 'application/json', 
                        'Authorization': `Bearer ${token}` 
                    },
                    data: {"tenant_id": orgId, "id": id}
                }
                const tenantUserList = await axios.request(getTenantUserList);
                console.log('***********tenantUserList', tenantUserList);
            } catch (error) {
                console.log('***********error', error);
                navigate('/dashboard')
                // Handle errors
            }
        }
        else
            setErrorMsg('Please enter correct credentials and retry');
    }
    return (
        <div className='main-div'>
            <TopBar />
            <div className='sub-div'>
                <input type='text'
                    placeholder='Organization ID'
                    className='txtfield-login'
                    value={orgId}
                    onChange={(e) => setOrgId(e.target.value)}
                ></input>
                <input type='text'
                    placeholder='User name'
                    className='txtfield-login'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                ></input>
                <input type='password'
                    placeholder='password'
                    className='txtfield-login'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button className='login-btn' onClick={() => goToDashboard()}>Login</button>
                <div className='row'>
                    <div className='col-md-6 pl-0'>
                        <a href='/' className='href-link'>Forgot Password</a>

                    </div>
                    <div className='col-md-6 text-right'>
                        <a href='/' className='href-link'>Contact Support</a>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;