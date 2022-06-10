import React /*  { useCallback, useState } */ from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import plusIcon from "../../img/plus-icon.svg";

import TaskItem from "../TaskItem/TaskItem";

/* pode-se quebrar as props(parametros) para ter mais clareza do que sera passado */
export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  /* em react os hooks padrões começam com use... */
  /* useState retorna um array de dois elementos, o primeiro
  o estado que quer se controlar, e o segundo a função que
  ira atualizar esse estado */

  /* const [count, setCount] = useState(0);
  const increment = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  }; */

  const addTask = () => {
    /* console.log("Função Filha"); */

    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      {/* tudo que estiver dentro de chaves é codigo js */}
      <div className="title">{title}</div>
      <div className="content">
        {/*   {count}  */}
        {/* <button onClick={increment}>Incremetar</button> */}
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
        <button onClick={addTask} className="btn">
          <img src={plusIcon} alt="Plus" />
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

/* nesse exemplo no componente tasklist, a propriedade title,
so poderá receber dados do tipo string, o isRequired quer dizer
que será obrigatorio */

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};

/* proptypes é uma biblioteca que define os tipos de dados 
do projeto validando assim os mesmos */
