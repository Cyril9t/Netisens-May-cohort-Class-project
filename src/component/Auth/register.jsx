import React, { useState } from "react";
import Logo from "../shared/logo";
import "./Register.css";
function Register() {


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
                    <h1 className="register-title">
                        Create an account
                    </h1>

                    <p className="register-subtitle">
                        Join CineScope and start your cinematic journey.
                    </p>
                </div>


                <form
                    className="register-form"

                >

                    <div className="register-field">
                        <label htmlFor="name">
                            Full Name
                        </label>

                        <input
                            className="register-input"
                            type="text"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>


                    <div className="register-field">
                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            className="register-input"
                            type="email"
                            placeholder="Enter your email"
                            required
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
                        />
                    </div>


                    <div className="register-field">
                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>

                        <input
                            className="register-input"
                            type="password"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>


                    <button
                        type="submit"
                        className="register-submit"
                    >
                        Create Account
                    </button>

                </form>


                <div className="register-footer">
                    <span>Already have an account? </span>

                    <a
                        href="#login"
                        className="register-login-link"
                    >
                        Sign In
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Register;