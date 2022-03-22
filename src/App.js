import React, { useEffect, useState } from "react";
import "./App.css";

// import Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // useEffect
  useEffect(()=> {
    getLocalTodos()
  },[])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    filterHandler();
  }, [todos, status]);

  const getLocalTodos =() => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let localTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodos)
    }
  }

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Todo List App</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
