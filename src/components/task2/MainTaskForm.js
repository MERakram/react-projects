import React from 'react';
import './MainTaskForm.css';
import NewTaskForm from './NewTaskForm';
import TasksList from './TaskList'

class MainTaskForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={tasks: []}

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(task){
    this.setState((prevState) => {
      return { 
        tasks: prevState.tasks.concat(task) 
      };
    });
  }

  removeTask(id){
      const tasks = this.state.tasks.filter(element => (element.id !== id));
      this.setState({ tasks: tasks });
  }

  render(){
    return (
      <div className="App">
        <NewTaskForm addTask={this.addTask}/>
        <TasksList tasks={this.state.tasks} removeTask={this.removeTask}/>
      </div>
    );
  }
}

export default MainTaskForm;