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
      const todo = Object.assign({}, todoList[taskId]);
      let newTodo = { task: todo.task, isInProgress: true, isDone: false };

      if (todo.isInProgress) {
        newTodo = { task: todo.task, isInProgress: false, isDone: true };
      }

      if (todo.isDone) {
        newTodo.isDone = false;
      }

      todoList[taskId] = newTodo;
      return { todoList };
    });
  }

  addTask(task) {
    this.setState((state) => {
      let todoList = state.todoList.slice();
      todoList.push({ task, isInProgress: false, isDone: false });
      return { todoList };
    });
  }

  render() {
    const items = this.state.todoList.map(
      ({ task, isInProgress, isDone }, id) => (
        <Todo
          task={task}
          id={id}
          onClick={this.updateTaskStatus}
          isDone={isDone}
          isInProgress={isInProgress}
          key={id}
        />
      )
    );

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
