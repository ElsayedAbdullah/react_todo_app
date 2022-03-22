import React from "react";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
  const inputTextHandler = e => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = e => {
    // prevent page refresh [default behaviour of form]
    e.preventDefault();
    // empty the value of input
    setInputText("");
    // update State
    if (inputText !== "") {
      setTodos([...todos, { text: inputText, completed: false, id: Math.random() }]);
    }
  };

  return (
    <form onSubmit={submitTodoHandler}>
      <input onChange={inputTextHandler} placeholder='todo....' required type="text" className="todo-input" value={inputText} />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={e => setStatus(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
