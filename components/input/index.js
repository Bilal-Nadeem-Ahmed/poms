import { useState } from "react";
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
        <p key={"project" + task.indexOf(t)}>{t}</p>
      ))}
    </>
  );
};

export default Input;
