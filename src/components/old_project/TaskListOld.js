import {useState} from 'react';
import React from "react"
import Tab from "./displayTab"
const AddDivs = (props) => {
    const [TasksList, setTasksList] = useState([]);
    const [task, setTask] = useState("");

    const onAddTaskClick = (task) => {
        setTasksList(TasksList.concat(
            task
        ));
        console.log(TasksList);
    };

    return (
        <div className="">
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Add Tasks</h3>
                        <div className="form-group mt-3">
                            <label>add Task</label>
                            <input
                                value={task}
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter task"
                                onChange={(e) => setTask(e.target.value)}
                            />
                        </div>

                        <div className="d-grid gap-2 mt-3">
                            <button type="button" onClick={() => onAddTaskClick(task)}
                                    className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/*{TasksList.map((task, index) =>*/}
            {/*    <center key={index}>*/}
            {/*        <div className="mt-3">{task}</div>*/}
            {/*        <button className="btn btn-danger" key={index - 1} onClick={(e) => {*/}
            {/*            setTasksList(TasksList.filter((ev) => ev !== task))*/}
            {/*        }}>delete*/}
            {/*        </button>*/}
            {/*    </center>*/}
            {/*)}*/}
            <Tab arr={TasksList} />
        </div>
    )
}

export default AddDivs;

