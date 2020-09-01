import React from 'react';
import Heading from './Heading';
import Todo from './Todo.js';
import Input from './Input.js';
import { getDefaultStatus, getNextStatus } from './todoStates';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { heading: 'Todo', todoList: [] };
    this.updateHeading = this.updateHeading.bind(this);
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  updateHeading(heading) {
    this.setState({ heading });
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
      const todo = { task, status: getDefaultStatus() };
      return { todoList: state.todoList.concat(todo) };
    });
  }

  render() {
    const { todoList, heading } = this.state;
    const items = todoList.map(({ task, status }, id) => (
      <Todo
        task={task}
        status={status}
        id={id}
        updateTaskStatus={this.updateTaskStatus}
        key={id}
      />
    ));

    return (
      <div>
        <Heading updateHeading={this.updateHeading} value={heading} />
        {items}
        <Input onSubmit={this.addTask} className="task" />
      </div>
    );
  }
}

export default TodoList;
