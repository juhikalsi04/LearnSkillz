// import Header from './components/layouts/Header';
import './App.css';
import { useState } from 'react';
import Sidebar from './components/layouts/Sidebar';
import Discussion from './components/pages/Discussion';
import About from './components/pages/About';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Placement from './components/pages/Placement';
import OnlineTest from './components/pages/OnlineTest';
import Company from './components/pages/Company';
import Practice from './components/pages/Practice';
import SampleTest from './components/pages/SampleTest';
import Login from './components/Login';
import Dashboard from './components/pages/Dashboard';
import Result from './components/Result';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    // Navigate to the dashboard after successful login
    // You can use useHistory from react-router-dom or any navigation method you prefer
  };
  return (
    <>

      <Router>
        <Sidebar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/placement' element={<Placement />} />
            <Route path='/onlinetest' element={<OnlineTest />} />
            <Route path='/discussion' element={<Discussion />} />
            <Route path="/companies/:companyName" element={<Company />} />
            <Route path="/aptitude" element={<Practice />} />
            <Route path='/sampletest/result' element={<Result />} />
            <Route path="/dashboard" render={() => <Dashboard user={user} />} />
            <Route path='/onlinetest/sampletest' element={<SampleTest />} />
            <Route path="/login" render={() => <Login onLogin={handleLogin} />} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
