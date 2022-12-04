import React, {useState} from "react";
import Input from "./Input"

const Item = ({
                  subIndex,
                  taskIndex,
                  whatList,
                  value,
                  isDone,
                  tasks,
                  setTasks
              }) => {
    const [inputText, setInputText] = useState(value);

    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    const handleEnter = (e) => {
        // if (e.keyCode === 13) {
            //add subtask
            if (whatList === 1) {

                const newSubtask = {
                    id: Math.random(),
                    subtaskTitle: inputText,
                    isDone: false
                };


                const taskListCopy = [...tasks];
                taskListCopy[taskIndex].subtask.push(newSubtask);
                setTasks(taskListCopy);

            } else if (whatList === 3) {
                const newSubtask = {
                    id: Math.random(),
                    subtaskTitle: inputText,
                    isDone: false
                };


                const taskListCopy = [...tasks];
                taskListCopy[taskIndex].subtask.push(newSubtask);
                setTasks(taskListCopy);

            } else {
                setTasks([
                    ...tasks,
                    {
                        id: Math.random(),
                        taskTitle: inputText,
                        isDone: false,
                        desc: "",
                        subtask: []
                    }
                ]);

            }
            setInputText("");
        // }
    };
    const handleDel = () => {
        const tasksCopy = [...tasks];
        tasksCopy[taskIndex].subtask.splice(subIndex, 1);
        setTasks(tasksCopy);
    };

    const editInput = (e) => {
        const newInputVal = e.target.value;
        setInputText(newInputVal);
    };

    const changeDoneStatus = () => {
        const tasksCopy = [...tasks];
        let statusCopy = false;
        if (whatList === 1) {
            //update subtask
            statusCopy = tasksCopy[taskIndex].subtask[subIndex].isDone;
            tasksCopy[taskIndex].subtask[subIndex].isDone = !statusCopy;
        } else {
            //updaet task
            statusCopy = tasksCopy[taskIndex].isDone;
            tasksCopy[taskIndex].isDone = !statusCopy;
        }

        // setCheckStatus(!statusCopy);
        setTasks(tasksCopy);
    };

    const update = (e) => {
        if (e.keyCode === 13) {
            const tasksCopy = [...tasks];
            if (whatList === 1) {
                //update subtask
                tasksCopy[taskIndex].subtask[subIndex].subtaskTitle = inputText;
            } else {
                //update task
                tasksCopy[taskIndex].taskTitle = inputText;
            }

            setTasks(tasksCopy);
        }
    };

    const style = {textDecorationLine: isDone ? "line-through " : "none", background: isDone ? "#78F45D" : "none"};
    const style2 = {
        color: isDone ? "transparent" : "white",
        background: isDone ? "transparent" : "green",
        border: isDone ? "0" : "1"
    };
    const style3 = {
        color: isDone ? "transparent" : "white",
        background: isDone ? "transparent" : "blue",
        border: isDone ? "0" : "1"
    };
    return (
        <div>
            <input
                className="form-control w-25 d-inline"
                style={style}
                value={inputText}
                onChange={editInput}
                onKeyDown={update}
            />
            {whatList === 1 ?
                <button className={"btn btn-success ms-2"} style={style2} onClick={changeDoneStatus}>Done</button> : ''}
            {whatList === 3 ? <button className={"btn btn-primary ms-2"} onClick={()=>handleEnter()} style={style3}>Add</button> : ''}
        </div>
    );
};

export default Item;
