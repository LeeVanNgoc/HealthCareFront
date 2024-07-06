import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderBar from './header/Header';
import SignIn from '../Si001/main';
import SignUp from '../Su001/main';
import UserManager001 from '../Mu001/main';
import UserManager002 from '../Mu002/main';
import UserManager003 from '../Mu003/main';
import UserManager004 from '../Mu004/main';
import UserManager005 from '../Mu005/main';


function Home() {
  const [mode, setMode] = useState('light'); 
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="Home">
      <BrowserRouter>
        <HeaderBar mode={mode} toggleColorMode={toggleColorMode} />
        <div style={{ paddingTop: '72px' }}> 
          <Routes>
            <Route exact path="/" element={<div>Home Content</div>} />
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
  );
}

export default Home;
