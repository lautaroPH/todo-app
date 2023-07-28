const Todo = ({ todo, todoDelete, todoToogleCompleted, setTodoEdit }) => {
  return (
    <div className="flex flex-col bg-white border rounded-md break-words mt-2">
      <div className="flex-1 p-5">
        <div className="flex items-center justify-end gap-2 mb-2">
          <h3 className="text-2xl font-bold">{todo.title}</h3>
          <button
            onClick={() => todoToogleCompleted(todo.id)}
            className={`py-1 px-2 text-sm rounded-md  transition-colors duration-300 ease-in-out  ${
              todo.completed
                ? 'text-green-600 border border-green-600 bg-white hover:bg-green-600 hover:text-white'
                : 'text-white bg-green-600 hover:bg-green-800'
            } ml-2`}
          >
            {todo.completed ? 'Terminado' : 'Terminar'}
          </button>
        </div>
        <p className="text-right pb-3 border-b border-gray-200">
          {todo.description}
        </p>
        <div className="justify-end flex mt-3">
          <button
            onClick={() => setTodoEdit(todo)}
            className="py-1 px-2 text-sm rounded-md transition-colors duration-300 ease-in-out bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white mr-2"
          >
            Editar
          </button>
          <button
            onClick={() => todoDelete(todo.id)}
            className="py-1 px-2 text-sm rounded-md transition-colors duration-300 ease-in-out bg-white text-red-600 border border-red-600 hover:bg-red-600 hover:text-white"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
