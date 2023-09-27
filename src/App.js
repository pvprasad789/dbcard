import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import AdminDashboard from './Dashboard/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="admindashboard" element={<AdminDashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
