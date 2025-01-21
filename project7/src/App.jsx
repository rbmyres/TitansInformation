import React, {useContext} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {toast, Toaster} from "react-hot-toast";
import Home from "./Pages/Home";
import Players from "./Pages/Players";
import Staff from "./Pages/Staff"
import History from "./Pages/History";
import Player from "./Pages/Player";
import Profile from "./Pages/Profile"
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import ResetPassword from "./Pages/Auth/ResetPassword"
import { AuthContext } from './Pages/Auth/AuthContext';

function App() {

  const {currentUser} = useContext(AuthContext);

  const message = () => {
    toast.error("Sign in to view this content");
  }

  return (
    <Router>
      <Toaster/>
      <nav>
        {currentUser ? (
          <ul className="nav">
          <Link className="links" to="/~rbmyres/CS354/Project7/project7/">Home</Link>
          <Link className="links" to="/~rbmyres/CS354/Project7/project7/players">Players</Link>
          <Link className="links" to="/~rbmyres/CS354/Project7/project7/staff/">Staff</Link>
          <Link className="links" to="/~rbmyres/CS354/Project7/project7/history/">History</Link>
          <Link className="profileLink" to="/~rbmyres/CS354/Project7/project7/profile/">Profile</Link>
        </ul>
        ) : (
          <ul className="nav">
          <Link className="links" to="/~rbmyres/CS354/Project7/project7/">Home</Link>
          <Link className="links" onClick={message}>Players</Link>
          <Link className="links" onClick={message}>Staff</Link>
          <Link className="links" to="/~rbmyres/CS354/Project7/project7/history/">History</Link>
          <Link className="profileLink" to="/~rbmyres/CS354/Project7/project7/profile/">Profile</Link>
        </ul>
        )
        
      }
      </nav>
      <Routes>
        <Route path="/~rbmyres/CS354/Project7/project7/" element={<Home />} />
        <Route path="/~rbmyres/CS354/Project7/project7/players" element={<Players />} />
        <Route path="/~rbmyres/CS354/Project7/project7/staff" element={<Staff />} />
        <Route path="/~rbmyres/CS354/Project7/project7/history" element={<History />} />
        <Route path="/~rbmyres/CS354/Project7/project7/player/:lastname" element={<Player />} />
        <Route path="/~rbmyres/CS354/Project7/project7/profile" element={<Profile />} />
        <Route path="/~rbmyres/CS354/Project7/project7/login" element={<Login />} />
        <Route path="/~rbmyres/CS354/Project7/project7/signup" element={<Signup />} />
        <Route path="/~rbmyres/CS354/Project7/project7/resetpassword" element={<ResetPassword />} />
      </Routes>
      <div className="footer">
        <ul>
            <li>Reese Myres</li>
            <li>email: rbmyres@go.olemiss.edu</li>
            <li>All information from: <a href="https://www.tennesseetitans.com/"> Tennessee Titans Website </a> </li>
        </ul>
    </div>
    </Router>
    
  );
}

export default App
