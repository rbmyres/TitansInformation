import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


function Login() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    let navigate = useNavigate();

    const login = async (event) => {
        event.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            navigate("/~rbmyres/CS354/TitansInformation/project7/profile");
            toast.success("Logged in!");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="wrapper">
            <div className="title"><span>Login</span></div>
            <form id="login-form" onSubmit={login}>
                <div className="row">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                        onChange={(event) => setLoginEmail(event.target.value)}
                    />
                </div>
                <div className="row">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        required
                        onChange={(event) => setLoginPassword(event.target.value)}
                    />
                </div>
                <div className="row button">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
