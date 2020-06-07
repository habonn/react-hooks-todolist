import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import { useGlobal } from "reactn";
import HITSAPI from "../../shared/HITSAPI";


export default function TodoAdd({ match }) {
  // const classes = useStyles();
  const hitsAPI = new HITSAPI();
  const [loading, setLoading] = useState(false);

  const mode = localStorage.getItem("mode");

  const [modelTodo, setModelTodo] = useState({
    title: "",
    description: "",
  });

  const [formMode, setFormMode] = useGlobal("formMode");

  const handleChangeModelTodo = (name, value) => {
    setModelTodo({
      ...modelTodo,
      [name]: value
    });
  };

  const fetchTodo = async userId => {
    console.log(userId);
    await hitsAPI.axios
      .get(`/todos/${userId}`)
      .then(function (response) {
        console.log(response.data);

        setModelTodo({
          ...modelTodo,
          title: response.data.title,
          description: response.data.description,
        });
      });
    setLoading(false);
  };

  useEffect(() => {
    console.log("match", match.params.id)
    if (match.path === "/main/form/:id") {
      setFormMode("edit");
    fetchTodo(match.params.id);
    } else {
      setFormMode("new");
 
    }
  }, []);


  return (
    <TodoForm
      model={modelTodo}
      mode={formMode}
      userId={match.params.id ? match.params.id : ""}
      handleChangeModelTodo={
        handleChangeModelTodo
      }
      fetchTodo={fetchTodo}
    />

  );
}

