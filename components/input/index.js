import { useState } from "react";
import TaskItem from "../TaskItem";
const Input = () => {
  const [task, setTask] = useState([]);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setTask([...task, e.target.value]);
      e.target.value = "";
    }
  };

  return (
    <>
      <input
        type="email"
        className="form-control"
        placeholder="Add a task"
        onKeyPress={handleKeyPress}
      ></input>

      {task.map((t) => (
        <TaskItem message={t} key={"project" + task.indexOf(t)} />
      ))}
    </>
  );
};

export default Input;
