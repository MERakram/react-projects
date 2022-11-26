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
        // console.log(UserList)
    };
    const onRemoveUserClick = (name) => {
        const selectedUser=UserList.find(
            (obj) => obj.username === name
        );
        // setUserList(UserList.splice(
        //     selectedUser, 1
        // ));
        console.log(selectedUser)
    };

    return (
        <div className="container">
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
                            <button onClick={() => onAddUserClick(username, password)} className="btn btn-primary">
                                Submit
                            </button>
                        </div>

                    </div>
                </form>

            </div>
            <div className="justify-content-center">
                <ul>
                    {UserList.map((data, key) => (
                        <li key={key + 1}>
                            <p>username: {data.username} password: {data.password}</p>
                            <button onClick={() => onRemoveUserClick(data.username)}>Go to Tab</button>
                        </li>

                    ))}
                </ul>
            </div>
            <Tab arr={UserList}/>
        </div>
    )
}

export default LoginPage;

