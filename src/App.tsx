import './App.css';
import Todo from './components/models/Todo';
import Todos from './components/Todos';

const todos = [
  new Todo('Learn React'),
  new Todo('Learn Typescript'),

]

function App() {
  return (
    <div className="App">
      <Todos items={todos} />
    </div>
  );
}

export default App;
