import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Signup() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    let navigate = useNavigate();

    const register = async (event) => {
        event.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            toast.success("Account created!");
            navigate("/~rbmyres/Projects/TitansInformation/project7/profile");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="wrapper">
            <div className="title">
                <span>Create Account</span>
            </div>
            <form id="signup-form" onSubmit={register}>
                <div className="row">
                    <label htmlFor="email">Enter Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                        onChange={(event) => setRegisterEmail(event.target.value)}
                    />
                </div>
                <div className="row">
                    <label htmlFor="password">Create Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Create password"
                        required
                        onChange={(event) => setRegisterPassword(event.target.value)}
                    />
                </div>
                <div className="row button">
                    <button type="submit">Signup</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
