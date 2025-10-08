import React from "react";
import { CheckSquare, Square } from "lucide-react";

function TaskCard({ todo, setTasks }) {

  //create a function that marks the task done
  const toggleTask = () => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
      t.id === todo.id ? { ...t, completed: !t.completed} : t
      )
    
    );
  }
  return (
    <div
      className="task-card">
        <div className="task-content">
          <div className="task-checkbox" onClick={toggleTask}>
            
            {todo.completed ? <CheckSquare/>: <Square/> }

          </div>
          <div className="task-details">
           
              <h3 className="task-title">{todo.title}</h3>
              <p className="task-description">{todo.description}</p>
              <p className="task-date">
                Created on {todo.createdAt.toLocaleDateString()}
              </p>
           
          </div>
        </div>
      {/* <h3>{todo.title}</h3>       */}
    </div>
  );
}

export default TaskCard;
