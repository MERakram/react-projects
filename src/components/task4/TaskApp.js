import React, {useEffect, useState} from "react";
import Task from "./Task";
import Input from "./Input";
import button from "../old_project/Button";

const TaskApp = () => {
    const [tasks, setTasks] = useState([]);

    const taskList = tasks.map((e, i) => (
        <div>
            <Task
                key={Math.random() * 1000}
                task={e}
                taskIndex={i}
                tasks={tasks}
                setTasks={setTasks}
            />
        </div>

    ));

    useEffect(() => {
    }, [tasks, setTasks]);

    return (
        <center>
            <div className="container">
                <h3 className="Auth-form-title mt-5">Add Tasks</h3>
                <div className="form-group mt-3">
                    <Input
                        placeholder="Add task..."
                        whatList={2}
                        tasks={tasks}
                        setTasks={setTasks}
                    />
                </div>
            </div>
            {taskList}
        </center>
    );
};

export default TaskApp;
