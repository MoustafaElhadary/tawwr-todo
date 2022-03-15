import './App.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import InputForm from './components/InputForm';
import TaskList from './components/Tasklist';

function App() {



  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');



  return (
    <div className="App">
      <h1>Todo List App</h1>
      <InputForm
        tasks={tasks}
        setTasks={setTasks}
      />
      <div>
        <button
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          onClick={() => setFilter('urgent')}
        >
          Urgent
        </button>
        <button
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>
      <TaskList tasks={tasks} setTasks={setTasks} filter={filter} />

    </div>
  );
}

export default App;
