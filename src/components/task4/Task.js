import Subtask from "./Subtask";
import Input from "./Input";
import Item from './Item'

const Task = ({ task, taskIndex, tasks, setTasks }) => {

    const subtaskList = task.subtask.map((e, i) => (
        <Subtask
            key={e.id}
            subIndex={i}
            subtask={e}
            task={task}
            taskIndex={taskIndex}
            tasks={tasks}
            setTasks={setTasks}
        />
    ));

    const numberOfDone = task.subtask.filter(e=>e.isDone).length

    return (
        <div>
            <br />
            <div >

            <Item
                taskIndex={taskIndex}
                task={task}
                tasks={tasks}
                setTasks={setTasks}
                whatList={3}
                value={task.taskTitle}
                isDone={task.isDone}
            />
            </div>

            <span>{numberOfDone}/{task.subtask.length}</span>
            {subtaskList}
            {/*<Input*/}
            {/*    className={"form-control w-25 mt-3"}*/}
            {/*    placeholder={"Add subtask..."}*/}
            {/*    whatList={1}*/}
            {/*    task={task}*/}
            {/*    taskIndex={taskIndex}*/}
            {/*    tasks={tasks}*/}
            {/*    setTasks={setTasks}*/}
            {/*/>*/}
        </div>
    );
};

export default Task;
