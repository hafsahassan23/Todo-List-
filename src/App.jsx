import React, { useState } from "react";
import TaskList from "./Components/TaskList";
import { Bell } from "lucide-react";

// tusaale xog (sample data)
const sampleTasks = [
  {
    id: "1",
    title: "Complete project proposal",
    description: "Write and submit the Q2 project proposal document",
    completed: false,
    createdAt: new Date("2025-03-10"),
  },
  {
    id: "2",
    title: "Review Code Challenges",
    description: "Review pending pull requests for the frontend repository",
    completed: true,
    createdAt: new Date("2025-03-08"),
  },
  {
    id: "3",
    title: "Update Documentation",
    description: "Update API documentation with new endpoints",
    completed: false,
    createdAt: new Date(),
  },
];

function App() {
  const [tasks, setTasks] = useState(sampleTasks);
   
  return (
    <div className="container" >
      <div className="header" >
        <div className="header-icon">
          <Bell />
        </div>
        <h1 className="header-title">My Tasks</h1>
      </div>

      <div className="task-container">
        <TaskList tasks={tasks} setTasks={ setTasks } />
      </div>
    </div>
  );
}

export default App;
