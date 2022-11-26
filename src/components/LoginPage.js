import {useState} from 'react';
import React from "react"
import Tab from "./displayTab";

const LoginPage = (props) => {
    const [UserList, setUserList] = useState([]);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onAddUserClick = (username, password) => {
        setUserList(UserList.concat(
            {username, password}
        ));
    };

    return (
        <div className="">
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="form-group mt-3">
                            <label>Username</label>
                            <input
                                value={username}
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter username"
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                value={password}
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="button" onClick={() => onAddUserClick(username, password)}
                                    className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {UserList.map((user, index) =>
                <center key={index}>
                    <h3 key={index + 1}>
                        user {index + 1} is {user.username} pass: {user.password}
                    </h3>

                    <button className="btn btn-danger" key={index - 1} onClick={(e) => {
                        setUserList(UserList.filter((ev) => ev !== user))
                    }}>delete
                    </button>
                </center>
            )}
        </div>
    )
}

export default LoginPage;

