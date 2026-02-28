import TaskCard from "./TaskCard";


function TaskList({ tasks, setTasks }) { //props= properties (parameter)
  // const {name,age} = props //Destructing
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard todo={task} setTasks={setTasks} />
      ))}
    </div>
  );
}

export default TaskList;
