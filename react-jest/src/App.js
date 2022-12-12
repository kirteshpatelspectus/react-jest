import './App.css';
import Todo from './component/todo';

function App() {
  const todos = [
    {id: 1, title: 'wash dishes', completed: false},
    {id: 2, title: 'make dinner', completed: true},

  ]

    {todos.map((todo)=> {return <Todo todo={todo}/>})}}



export default App;
