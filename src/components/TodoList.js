import React from 'react';
import Heading from './Heading';
import Todo from './Todo.js';
import Input from './Input.js';
import { getDefaultStatus, getNextStatus, generateId } from './todoStates';
const getId = generateId();

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { heading: 'Todo', todoList: [] };
    this.updateHeading = this.updateHeading.bind(this);
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask(id) {
    this.setState((state) => {
      return {
        todoList: state.todoList
          .slice(0, id)
          .concat(state.todoList.slice(id + 1)),
      };
    });
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
    const id = getId();
    this.setState((state) => {
      const todo = { task, status: getDefaultStatus(), id };
      return { todoList: state.todoList.concat(todo) };
    });
  }

  render() {
    const { todoList, heading } = this.state;
    const items = todoList.map(({ task, status, id }) => (
      <Todo
        task={task}
        status={status}
        id={id}
        updateTaskStatus={this.updateTaskStatus}
        deleteTask={this.deleteTask}
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
