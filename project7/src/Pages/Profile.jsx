import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Auth/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from './Auth/FirebaseConfig';
import { toast } from "react-hot-toast";

function Profile(){
    let navigate = useNavigate();

    const {currentUser} = useContext(AuthContext);

    const logout = async () => {
        await signOut(auth);
        toast.success("Logged out!");
    }

    return(
        <div>
            <ul className="choices">
                <li>
                    {currentUser ? (
                        <button onClick={logout}>Logout</button>
                    ) : (
                        <button onClick={()=>{
                            navigate("/~rbmyres/CS354/Project7/project7/login");
                        }}>Login</button>
                    )
                }</li>
                <li><button onClick={()=>{
                    navigate("/~rbmyres/CS354/Project7/project7/signup");
                }}>Create Account</button></li>
                <li><button onClick={()=>{
                    navigate("/~rbmyres/CS354/Project7/project7/resetpassword");
                }}>Reset Password</button></li>
            </ul>
        </div>
    )
}

export default Profile