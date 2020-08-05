import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać",
        date: "2020-08-09",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "wygrać",
        date: "2020-08-09",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "przegrać",
        date: "2020-08-09",
        important: true,
        active: false,
        finishDate: null,
      },
    ],
  };
  deleteTask = (id) => {
    console.log("delete w komponencie App" + id);
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex((task) => task.id === id);
    // tasks.splice(index, 1);

    // this.setState({
    //   tasks,
    // });

    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    console.log("change w komponencie App" + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <div className='App'>
        TODOAPP
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
