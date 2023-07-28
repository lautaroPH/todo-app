import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { useEffect, useState } from 'react';
import { initialTodos } from '../utils/initialTodos';

const localTodos = JSON.parse(localStorage.getItem('todos'));

const App = () => {
  const [todos, setTodos] = useState(localTodos || initialTodos);
  const [todoEdit, setTodoEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const todoDelete = (todoId) => {
    if (todoEdit && todoId === todoEdit.id) {
      setTodoEdit(null);
    }

    const changeTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(changeTodos);
  };

  const todoToogleCompleted = (todoId) => {
    const changeTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(changeTodos);
  };

  const todoAdd = (todo) => {
    const newTodo = {
      id: crypto.randomUUID(),
      ...todo,
      completed: false,
    };

    const changeTodos = [newTodo, ...todos];
    setTodos(changeTodos);
  };

  const todoUpdate = (todoEdit) => {
    const changeTodos = todos.map((todo) =>
      todo.id === todoEdit.id ? todoEdit : todo,
    );

    setTodoEdit(null);
    setTodos(changeTodos);
  };

  return (
    <div className="px-5 lg:max-w-6xl mt-6 mx-auto w-full lg:px-20">
      <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-center">
        <div className="order-2 md:order-1 flex-1">
          <TodoList
            todos={todos}
            todoDelete={todoDelete}
            todoToogleCompleted={todoToogleCompleted}
            setTodoEdit={setTodoEdit}
          />
        </div>
        <div className="order-1 md:order-2">
          <TodoForm
            todoAdd={todoAdd}
            todoEdit={todoEdit}
            todoUpdate={todoUpdate}
            setTodoEdit={setTodoEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
