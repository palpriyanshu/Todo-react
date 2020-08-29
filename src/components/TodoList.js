import React from 'react';
import Todo from './Todo.js';
import Input from './Input.js';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoList: [] };
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  updateTaskStatus(taskId) {
    this.setState((state) => {
      let todoList = state.todoList.slice();
      const task = Object.assign({}, todoList[taskId]);
      task.hasDone = !task.hasDone;
      todoList[taskId] = task;
      return { todoList };
    });
  }

  addTask(task) {
    this.setState((state) => {
      let todoList = state.todoList.slice();
      todoList.push({ task, hasDone: false });
      return { todoList };
    });
  }

  render() {
    const items = this.state.todoList.map(({ task, hasDone }, id) => (
      <Todo
        item={task}
        id={id}
        onClick={this.updateTaskStatus}
        hasDone={hasDone}
        key={id}
      />
    ));

    return (
      <div>
        <h2>Todo</h2>
        {items}
        <Input onSubmit={this.addTask} />
      </div>
    );
  }
}

export default TodoList;
