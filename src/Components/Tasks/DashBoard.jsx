import Add from "./Functionals/Add"
import NewTask from "./NewTask"
import AllTasks from "./AllTasks"
import { useState } from "react"

const DashBoard = () => {

  const [isCreatingNewTask, setIsCreatingNewTask] = useState(false)
  const [tasks, setTasks] = useState(["5-Hy", "8-Bye"])

  return (
    <div className="relative p-5">
      <Add setIsCreatingNewTask={setIsCreatingNewTask} />
      <div className="mt-3 flex gap-4">
        <AllTasks tasks={tasks} setTasks={setTasks} />
        {/* creates a specific task-card for adding a new task when isCreatingNewTask is true */}
        <NewTask setTasks={setTasks} isCreatingNewTask={isCreatingNewTask} setIsCreatingNewTask={setIsCreatingNewTask} />
      </div>
    </div>
  )
}

export default DashBoard