import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function ResetPassword() {
    const [resetEmail, setResetEmail] = useState("");
    let navigate = useNavigate();

    const login = async (event) => {
        event.preventDefault(); 
        try {
            const user = await sendPasswordResetEmail(auth, resetEmail);
            navigate("/profile");
            toast.success("Email sent!");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="wrapper">
            <div className="title"><span>Reset Password</span></div>
            <form id="login-form" onSubmit={login}>
                <div className="row">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                        onChange={(event) => setResetEmail(event.target.value)}
                    />
                </div>
                <div className="row button">
                    <button type="submit">Send Reset Email</button>
                </div>
            </form>
        </div>
    );
}

export default ResetPassword;
