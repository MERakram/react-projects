import React, {useState} from "react";

const Input = ({
                   tasks,
                   setTasks,
                   whatList,
                   placeholder,
                   taskIndex
               }) => {
    const [inputText, setInputText] = useState("");

    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    const handleEnter = (e) => {
        if (e.keyCode === 13) {
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
        }
    };
    return (
        <div>
            <input
                className={"form-control w-50 mt-3"}
                onChange={handleChange}
                value={inputText}
                onKeyDown={handleEnter}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
