import Add from "./Functionals/Add"
import NewTask from "./NewTask"
import AllTasks from "./AllTasks"
import { useLayoutEffect, useState } from "react"
import { fetchTasks } from "./Backend_Operations"
import useAppContext from "../../useAppContext"
import { Link } from "react-router-dom"

const DashBoard = () => {

  const { setMessage, isLogedIn } = useAppContext()

  const [isCreatingNewTask, setIsCreatingNewTask] = useState(false)

  // all tasks from the data-base
  const [tasks, setTasks] = useState()

  useLayoutEffect(() => {
    const showTasks = async () => {
      const response = await fetchTasks(setTasks)

      setMessage(response.message)
    }

    showTasks()

  }, [])

  return (
    <div className="relative p-5">
      {
        isLogedIn ?
          <>
            <Add setIsCreatingNewTask={setIsCreatingNewTask} />
            <div className="mt-5 flex flex-wrap gap-3.5">
              <AllTasks tasks={tasks} setTasks={setTasks} />
              {/* creates a specific task-card for adding a new task when isCreatingNewTask is true */}
              <NewTask setTasks={setTasks} isCreatingNewTask={isCreatingNewTask} setIsCreatingNewTask={setIsCreatingNewTask} />
            </div>
          </>

          : <>
            <p className="mb-2">There is a network error or you are not loged in:</p>
            <Link to="/Account" className="underline px-2 py-1 border">Login right now</Link>
          </>
      }
    </div>
  )
}

export default DashBoard