const TaskItem = ({ message, remove }) => {
  return (
    <p>
      {message} <i className="bi text-primary bi-pencil"></i>
      <i onClick={remove} className="bi text-danger bi-trash3"></i>
    </p>
  );
};

export default TaskItem;
