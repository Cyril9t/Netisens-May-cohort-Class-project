
import { Link } from "react-router-dom";
import Logo from "../shared/logo";
import "./Register.css";
import { useState } from "react";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const { value, name } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }))
    }



    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const resp = await fetch("https://zyloo-api-v1.onrender.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(formData)
            })

            const data = await resp.json()
            console.log(data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }


    }

    return (
        <div className="register-page">
            <div className="register-card">

                <div className="register-brand">
                    <div className="logo">
                        <Logo />
                    </div>
                    <div>

                        <span className="register-brand-name">
                            CineScope
                        </span>
                    </div>
                </div>


                <div className="register-header">
                    <h1 className="register-title login">
                        Welcome Back
                    </h1>

                    <p className="register-subtitle login">
                        Join CineScope and start your cinematic journey.
                    </p>
                </div>


                <form
                    onSubmit={handleSubmit}
                    className="register-form"

                >

                    <div className="register-field">
                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            className="register-input"
                            type="email"
                            placeholder="Enter your email"
                            required
                            name="email"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="register-field">
                        <label htmlFor="password">
                            Password
                        </label>


                        <input
                            className="register-input"
                            type="password"
                            placeholder="Create a password"
                            required
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />


                    </div>



                    <button
                        type="submit"
                        className="register-submit"
                    >
                        {isLoading ? "Authenticating..." : "Login"}
                    </button>

                </form>


                <div className="register-footer">
                    <span>Don't have an account? </span>

                    <Link
                        to="/register"
                        className="register-login-link"
                    >
                        Sign Up
                    </Link>
                </div>

            </div>
        </div>
    );
};

