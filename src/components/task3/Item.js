import React, {useState} from "react";

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

    return (
        <div>
            <input className="form-check-input me-1" type="checkbox" checked={isDone} onChange={changeDoneStatus}/>
            <input
                className="form-control w-25 d-inline"
                style={style}
                value={inputText}
                onChange={editInput}
                onKeyDown={update}
            />
            {whatList === 1 ? <button onClick={handleDel}>X</button> : ''}
        </div>
    );
};

export default Item;
