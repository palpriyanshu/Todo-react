import React from 'react';
import Todo from './Todo.js';
import Input from './Input.js';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoList: [], value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(id) {
    this.setState((state) => {
      let todoList = state.todoList.slice();
      const currentTodo = Object.assign({}, todoList[id]);
      currentTodo.hasDone = !currentTodo.hasDone;
      todoList[id] = currentTodo;
      return { todoList };
    });
  }

  handleChange(value) {
    this.setState({ value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState((state) => {
      let todoList = state.todoList.slice();
      todoList.push({ item: state.value, hasDone: false });
      return { todoList: todoList, value: '' };
    });
  }

  render() {
    const items = this.state.todoList.map(({ item, hasDone }, id) => (
      <Todo
        item={item}
        id={id}
        onClick={this.handleClick}
        hasDone={hasDone}
        key={id}
      />
    ));

    return (
      <div>
        <h2>Todo</h2>
        {items}
        <Input
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default TodoList;
