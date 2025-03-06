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
          <Link className="links" to="/">Home</Link>
          <Link className="links" to="/players">Players</Link>
          <Link className="links" to="/staff/">Staff</Link>
          <Link className="links" to="/history/">History</Link>
          <Link className="profileLink" to="/profile/">Profile</Link>
        </ul>
        ) : (
          <ul className="nav">
          <Link className="links" to="/">Home</Link>
          <Link className="links" onClick={message}>Players</Link>
          <Link className="links" onClick={message}>Staff</Link>
          <Link className="links" to="/history/">History</Link>
          <Link className="profileLink" to="/profile/">Profile</Link>
        </ul>
        )
        
      }
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/history" element={<History />} />
        <Route path="/player/:lastname" element={<Player />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
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
