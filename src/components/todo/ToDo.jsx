import React, { useState } from "react";

import "normalize.css";
import s from "./ToDo.module.css";

import Task from "./Task/Task";

function ToDo() {
  const [state, setState] = useState([]);

  const [text, setText] = useState("");

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const addTask = () => {
    if (text) {
      const t = {
        id: Math.random().toString(36).substring(2, 9),
        task: text,
        complete: false,
      };
      setState([...state, t]);
      setText("");
    } else {
      return null;
    }
  };
  const handleToggle = () => {};

  const removeTask = (id) => {
    setState([...state.filter((el) => el.id !== id)]);
  };

  return (
    <div className={s.todo}>
      <h1 className={s.title}>ToDo</h1>
      <div className={s.data}>
        <input
          value={text}
          onChange={onTextChange}
          placeholder="Task"
          className={s.input}
          type="text"
        />
        <button onClick={addTask} className={s.btn}>
          add task
        </button>
      </div>
      <div className={s.tasklist}>
        {state.map((obj, index) => (
          <Task
            tasks={obj}
            key={obj.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDo;
