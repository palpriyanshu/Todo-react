import React from 'react';

const Todo = (props) => {
  const className = props.isDone ? 'todo done' : 'todo';
  return (
    <div className={className} onClick={() => props.onClick(props.id)}>
      {props.item}
    </div>
  );
};

const Input = (props) => (
  <form onSubmit={props.onSubmit}>
    <input
      type="text"
      onChange={({ target }) => props.onChange(target.value)}
      value={props.value}
    />
  </form>
);

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
      currentTodo.isDone = !currentTodo.isDone;
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
      todoList.push({ item: state.value, isDone: false });
      return { todoList: todoList, value: '' };
    });
  }

  render() {
    const items = this.state.todoList.map(({ item, isDone }, id) => (
      <Todo
        item={item}
        id={id}
        onClick={this.handleClick}
        isDone={isDone}
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
