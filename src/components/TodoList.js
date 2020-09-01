import React from 'react';
import Header from './Header';
import Todo from './Todo.js';
import Input from './Input.js';
import { getDefaultStatus, getNextStatus } from './todoStates';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { header: 'Todo', todoList: [] };
    this.updateHeader = this.updateHeader.bind(this);
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  updateHeader(header) {
    this.setState({ header });
  }

  updateTaskStatus(taskId) {
    this.setState((state) => {
      let todoList = state.todoList.slice();
      const todo = Object.assign({}, todoList[taskId]);
      todo.status = getNextStatus(todo.status);
      todoList[taskId] = todo;
      return { todoList };
    });
  }

  addTask(task) {
    this.setState((state) => {
      const todoList = state.todoList.slice();
      todoList.push({ task, status: getDefaultStatus() });
      return { todoList };
    });
  }

  render() {
    const items = this.state.todoList.map(({ task, status }, id) => (
      <Todo
        task={task}
        id={id}
        onClick={this.updateTaskStatus}
        status={status}
        key={id}
      />
    ));

    return (
      <div>
        <Header
          onSubmit={this.updateHeader}
          defaultValue={this.state.header}
          className="header"
        />
        {items}
        <Input onSubmit={this.addTask} defaultValue="" className="task" />
      </div>
    );
  }
}

export default TodoList;
