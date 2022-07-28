import "normalize.css";
import s from "./Task.module.css";

function Task(props) {
  return (
    <div className={s.task}>
      <div className={s.taskflex}>
        <h3 className={s.title}>Task</h3>
        <button
          onClick={props.removeTask(props.tasks.id)}
          className={s.close}
        ></button>
      </div>
      <p className={s.text}>{props.tasks.task}</p>
    </div>
  );
}

export default Task;
