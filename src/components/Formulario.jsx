import { useState } from "react";

const Formulario = () => {
  const [todo, setTodo] = useState({
    todoName: "",
    todoDescripcion: "",
    todoEstado: "Pendiente",
    todoCheck: false,
  });

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { todoName, todoDescripcion } = todo;
    if (!todoDescripcion.trim() || !todoName.trim()) {
      console.log("Campo Vacio!");
      setError(true);
      return;
    }
    setError(false);

    setTodo({
      todoName: "",
      todoDescripcion: "",
      todoEstado: "Pendiente",
      todoCheck: false,
    });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    // setTodo({
    //   ...todo,
    //   [e.target.name]: e.target.value, //propiedad pasada de forma dinamica entre '[]'
    // });
    // Otra forma de hacer lo de arriba

    // setTodo((old) => ({
    //   ...old,
    //   // [e.target.name]: e.target.value, //actualiza propiedades del form pasadas dinamica/ entre '[]'
    //   [e.target.name]:
    //     e.target.type === "checkbox" ? e.target.checked : e.target.value,
    // }));

    //Otra manera de hacer lo mismo a lo anterior:
    const { name, value, checked, type } = e.target;

    setTodo((old) => ({
      ...old,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const PintarError = () => (
    <div className="alert alert-danger">Campos Obligatorios</div>
  );

  return (
    <>
      <h2>Controlados</h2>

      {error ? <PintarError /> : null}

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese "
          name="todoName"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoName}
        />
        <textarea
          name="todoDescripcion"
          cols="30"
          rows="3"
          className="form-control mb-2"
          placeholder="Ingrese Descripcion del ToDo"
          onChange={handleChange}
          value={todo.todoDescripcion}
        ></textarea>
        <select
          name="todoEstado"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoEstado}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="todoCheck"
            checked={todo.todoCheck}
            onChange={handleChange}
          />
          <label className="form-check-label">Prioritaria</label>
        </div>
        <button className="btn btn-primary" type="submit" htmlFor="">
          Agregar
        </button>
      </form>
    </>
  );
};

export default Formulario;
