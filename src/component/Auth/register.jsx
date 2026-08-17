import React, { useState } from "react";
import "./Register.css";

const Register = () => {


    return (
        <div className="register-page">
            <div className="register-card">

                <div className="register-brand">
                    <svg
                        className="register-brand-icon"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="28"
                        height="28"
                    >
                        <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H9l2 4H8L6 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
                    </svg>

                    <span className="register-brand-name">
                        CineScope
                    </span>
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