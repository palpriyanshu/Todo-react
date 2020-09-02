import React from 'react';
import Heading from './Heading';
import Todo from './Todo.js';
import Input from './Input.js';
import Delete from './Delete';
import { getDefaultStatus, getNextStatus } from '../todoStates';

const DEFAULT_HEADING = 'Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { heading: DEFAULT_HEADING, todoList: [], lastId: 0 };
    this.updateHeading = this.updateHeading.bind(this);
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.deleteTodoList = this.deleteTodoList.bind(this);
  }

  deleteTodoList() {
    this.setState({ heading: DEFAULT_HEADING, todoList: [], lastId: 0 });
  }

  deleteTask(id) {
    this.setState((state) => {
      return { todoList: state.todoList.filter((todo) => todo.id !== id) };
    });
  }

  updateHeading(heading) {
    this.setState({ heading });
  }

  updateTaskStatus(taskId) {
    this.setState((state) => {
      let todoList = state.todoList.slice();
      const { task, id, status } = todoList[taskId];
      todoList[taskId] = { task, id, status: getNextStatus(status) };
      return { todoList };
    });
  }

  addTask(task) {
    this.setState((state) => {
      const todo = { task, status: getDefaultStatus(), id: state.lastId };
      return {
        todoList: state.todoList.concat(todo),
        lastId: state.lastId + 1,
      };
    });
  }

  render() {
    const { todoList, heading } = this.state;
    const items = todoList.map((todo) => (
      <Todo
        todo={todo}
        updateTaskStatus={this.updateTaskStatus}
        deleteTask={this.deleteTask}
        key={todo.id}
      />
    ));

    return (
      <div>
        <div className="todoBox">
          <Heading updateHeading={this.updateHeading} value={heading} />
          <Delete onDelete={this.deleteTodoList} />
        </div>
        {items}
        <Input onSubmit={this.addTask} className="task" />
      </div>
    );
  }
}

export default TodoList;
