import React, { Component } from 'react';
import Container from './components/Container/Container';
import TodoList from './components/TodoList';
import initialTodos from './json/todos.json';
// import ColorPicker from './components/ColorPicker';
// import Alert from './components/Alert';
// import Box from './components/Box/Box';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
// import colors from './json/colorPickerOptions.json';

class App extends Component {
  state = {
    todos: initialTodos,
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;
    // const completedTodo = todos.filter(todo => todo.completed);
    // console.log(completedTodo.length);
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );
    // console.log(completedTodos);
    return (
      <Container>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        <div>
          <p>Общее кол-во туду:{todos.length}</p>
          <p>Kол-во выполненных:{completedTodos}</p>
        </div>
        {/* <Dropdown /> */}
        {/* <Counter initialValue={10} /> */}
        {/* <ColorPicker colors={colors} /> */}
        {/* <Box type="small" /> */}
        {/* <Alert text="Alert" type="success" /> */}
      </Container>
    );
  }
}

export default App;
