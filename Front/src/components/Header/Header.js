import React, { useContext } from "react";
import HeaderCSS from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

function Header() {
    const { username, setUsername } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setUsername("");
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <>
            <header>
                <nav
                    className={`navbar navbar-expand-lg navbar-dark header ${HeaderCSS.header}`}
                >
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/movies">
                            Movies App
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-end"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                {localStorage.getItem("username") ? (
                                    <li className="nav-item">
                                        <span className="nav-link">
                                            Hello, {username}
                                        </span>
                                    </li>
                                ) : null}
                                {localStorage.getItem("username") ? (
                                    <li className="nav-item">
                                        <button
                                            className="nav-link btn"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                ) : (
                                    <>
                                        <li className="nav-item me-3">
                                            <Link
                                                className="nav-link"
                                                to="/login"
                                            >
                                                Login
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                to="/register"
                                            >
                                                Register
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
