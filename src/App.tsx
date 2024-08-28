import { useState } from 'react';
import './App.css';
import Todo from './components/models/Todo';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

// const todos = [
//   new Todo('Learn React'),
//   new Todo('Learn Typescript'),

// ]



function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todosHandler = (enteredText: string) => {
    const todo = new Todo(enteredText);
    setTodos((prevData) => { return prevData.concat(todo)})
  }  

  const todosRemoveHandler = (todoId: string) => {
    console.log('See');
    
    setTodos(prevTodos => {return prevTodos.filter(todo => todo.id !== todoId)}) 
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todosHandler}/>
      <Todos items={todos} onRemove={todosRemoveHandler}/>
    </div>
  );
}

export default App;
