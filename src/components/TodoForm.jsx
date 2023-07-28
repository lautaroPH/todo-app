import { useState, useEffect } from 'react';
import { initialFormValues } from '../../utils/initialFormValues';

const TodoForm = ({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (todoEdit) {
      setFormValues(todoEdit);
    } else {
      setFormValues(initialFormValues);
    }
  }, [todoEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const changeFormValues = {
      ...formValues,
      [name]: value,
    };

    setFormValues(changeFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.title.trim() === '')
      return setError('Debes indicar un titulo');
    if (formValues.description.trim() === '')
      return setError('Debes indicar una descripcion');

    if (todoEdit) {
      todoUpdate(formValues);
      setSuccessMessage('Actualizado con exito');
    } else {
      todoAdd(formValues);
      setSuccessMessage('Agregado con exito');
      setFormValues(initialFormValues);
    }

    setTimeout(() => {
      setSuccessMessage(null);
    }, 2000);
    setError(null);
  };

  return (
    <div>
      <h2 className="text-center text-5xl font-semibold">
        {todoEdit ? 'Editar tarea' : 'Nueva tarea'}
      </h2>
      {todoEdit && (
        <button
          onClick={() => setTodoEdit(null)}
          className="mt-2 py-1 px-2 text-sm rounded-md transition-colors duration-300 ease-in-out text-black bg-yellow-400 hover:bg-yellow-500 mb-2"
        >
          Cancelar edicion
        </button>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="titulo"
          className="mt-2 w-full h-9 py-2 px-3 text-gray-700 leading-tight bg-white border border-gray-400 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          value={formValues.title}
          name="title"
          onChange={handleInputChange}
        ></input>
        <textarea
          placeholder="descripcion"
          className="mt-2 w-full py-2 px-3 text-gray-700 leading-tight bg-white border border-gray-400 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          value={formValues.description}
          name="description"
          onChange={handleInputChange}
          rows={5}
        ></textarea>
        <button className="py-2 text-lg rounded-md transition-colors duration-300 ease-in-out text-white bg-blue-600 hover:bg-blue-800 w-full block mt-2">
          {todoEdit ? 'Actualizar tarea' : 'Agregar tarea'}
        </button>
      </form>
      {error && (
        <div className="text-red-900 bg-red-300 border border-red-400 py-3 px-5 mb-4 rounded-md mt-2">
          {error}
        </div>
      )}

      {successMessage && (
        <div className="text-green-900 bg-green-300 border border-green-400 py-3 px-5 mb-4 rounded-md mt-2">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default TodoForm;
