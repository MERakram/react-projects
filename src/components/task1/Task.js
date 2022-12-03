import React from "react";
import NewTaskForm from "./NewTaskForm";

function Task({
                  todo,
                  completeTodo,
                  removeTodo,
                  submitUpdate,
                  edit,
                  setEdit,
              }) {
    return (
        <>
            <div className="todo-list-item">
                <div className="todo-mark-icon">
                    {todo.isComplete ? (

                        <input
                            type="checkbox"
                            checked
                            onClick={() => completeTodo(todo.id)}
                        />


                    ) : (
                        <input
                            type="checkbox"
                            readOnly
                            onClick={() => completeTodo(todo.id)}
                        />

                    )}
                </div>

                <div className="todo-item">
                    {todo.isComplete ? (
                        <p>
                            <del>{todo.text}</del>
                        </p>
                    ) : edit.id === todo.id ? (
                        <NewTaskForm edit={edit} onSubmit={submitUpdate}/>
                    ) : (
                        <p> {todo.text} </p>
                    )}
                </div>
            </div>
            <div className="todo-icons">
                {!todo.isComplete && (
                    <button onClick={() => setEdit({id: todo.id, value: todo.text})}
                            className="edit-icon">
                        edit
                    </button>
                )}
                <button onClick={() => removeTodo(todo.id)}
                        className="delete-icon">
                    delete
                </button>
            </div>
        </>
    );
}

Task.defaultProps = {
    edit: {id: null, value: ""},
};

export default Task;
