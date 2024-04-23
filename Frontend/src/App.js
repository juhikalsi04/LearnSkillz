// import Header from './components/layouts/Header';
import './App.css';
import Sidebar from './components/layouts/Sidebar';
import Discussion from './components/pages/Discussion';
import About from './components/pages/About';
import Home from './components/pages/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Placement from './components/pages/Placement';
import OnlineTest from './components/pages/OnlineTest';
import Company from './components/pages/Company';
import Practice from './components/pages/Practice';

function App() {
  return(
    <>
  
  <Router>
    <Sidebar>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/placement' element={<Placement/>} />
      <Route path='/onlinetest' element={<OnlineTest/>} />
      <Route path='/discussion' element={<Discussion/>} />
      <Route path="/companies/:companyName" element={<Company />} />
      <Route path="/aptitude" element={<Practice/>}/>
    </Routes>
    </Sidebar>
  </Router>
  </>
  );
}

export default App;
