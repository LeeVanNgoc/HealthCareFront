import './AppThread.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home'
import HeaderBar from './page/header/Header';
import Footer from './page/footer/Footer';
import SignIn from './Si001/main';
import SignUp from './Su001/main';
import UserManager001 from './Md001/main';
import UserManager002 from './Md002/main';
import UserManager003 from './Md003/main';
import UserManager004 from './Md004/main';
import UserManager005 from './Md005/main';
import HomeProduct from './Hs001/main';

function AppThread() {
  return (
    <div className="AppThread">
        <div className="Home">
      <BrowserRouter>
        <HeaderBar/>
        <div style={{ paddingTop: '72px' }}> 
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/footer" element={<Footer />} />
            <Route exact path="/home-product" element={<HomeProduct />} />
            <Route exact path="/sign-in" element={<SignIn />} />
            <Route exact path="/sign-up" element={<SignUp />} />
            <Route exact path="/user-manager-001" element={<UserManager001 />} />
            <Route exact path="/user-manager-002" element={<UserManager002 />} />
            <Route exact path="/user-manager-003" element={<UserManager003 />} />
            <Route exact path="/user-manager-004" element={<UserManager004 />} />
            <Route exact path="/user-manager-005" element={<UserManager005 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default AppThread;
