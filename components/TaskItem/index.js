const TaskItem = ({ message }) => {
  return (
    <p>
      {message} <i class="bi text-primary bi-pencil"></i>
      <i class="bi text-danger bi-trash3"></i>
    </p>
  );
};

export default TaskItem;
