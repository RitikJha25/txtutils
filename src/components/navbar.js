/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            TextUtils
                        </a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#">About</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right mt-2">
                        <li className="mt-2">
                            <label className="checkbox-inline">
                                <input type="checkbox" data-toggle="toggle" /> enable dark mode
                            </label>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
