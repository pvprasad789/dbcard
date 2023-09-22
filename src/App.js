import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
