import { useState } from "react";
import TaskItem from "../TaskItem";

const Input = () => {
  const [task, setTask] = useState([]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setTask([...task, { desc: e.target.value, id: e.timeStamp }]);
      e.target.value = "";
    }
    console.log(e);
  };

  const handleDelete = (id) => {
    const removed = task.filter((val) => val.id !== id);
    setTask([...removed]);
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
        <TaskItem
          remove={() => {
            handleDelete(t.id);
          }}
          message={t.desc}
          key={"project" + t.id}
        />
      ))}
    </>
  );
};

export default Input;
