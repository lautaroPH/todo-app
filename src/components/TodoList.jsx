import Todo from './Todo';

const TodoList = ({ todos, todoDelete, todoToogleCompleted, setTodoEdit }) => {
  return (
    <div>
      <h2 className="text-right text-5xl font-semibold">Lista de todos</h2>
      {todos.length === 0 ? (
        <div className="mt-2 text-blue-900 bg-blue-300 border border-blue-400 py-3 px-5 mb-4 rounded-md">
          No hay tareas por favor agraga una tarea
        </div>
      ) : (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            todoDelete={todoDelete}
            todoToogleCompleted={todoToogleCompleted}
            setTodoEdit={setTodoEdit}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
