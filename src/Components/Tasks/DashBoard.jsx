import Add from "./Functionals/Add"
import NewTask from "./NewTask"
import AllTasks from "./AllTasks"
import { useLayoutEffect, useState } from "react"
import { fetchTasks } from "./Backend_Operations"

const DashBoard = () => {

  const [isCreatingNewTask, setIsCreatingNewTask] = useState(false)
  const [tasks, setTasks] = useState()

  useLayoutEffect(() => {
    fetchTasks(setTasks)
  }, [])

  return (
    <div className="relative p-5">
      <Add setIsCreatingNewTask={setIsCreatingNewTask} />
      <div className="mt-5 flex flex-wrap gap-3.5">
        <AllTasks tasks={tasks} setTasks={setTasks} />
        {/* creates a specific task-card for adding a new task when isCreatingNewTask is true */}
        <NewTask setTasks={setTasks} isCreatingNewTask={isCreatingNewTask} setIsCreatingNewTask={setIsCreatingNewTask} />
      </div>
    </div>
  )
}

export default DashBoard