import Add from "./Functionals/Add"
import NewTask from "./NewTask"
import AllTasks from "./AllTasks"
import { useLayoutEffect, useState } from "react"
import { fetchTasks } from "./Backend_Operations"
import useAppContext from "../../useAppContext"
import { verifyUser } from "../Account/Authentication"
import { Link } from "react-router-dom"

const DashBoard = () => {

  const { setMessage } = useAppContext()

  const [isCreatingNewTask, setIsCreatingNewTask] = useState(false)
  const [isLogedIn, setIsLogedIn] = useState(true)

  // all tasks from the data-base
  const [tasks, setTasks] = useState()

  useLayoutEffect(() => {
    const showTasks = async () => {
      const response = await fetchTasks(setTasks)

      setMessage(response.message)
    }

    showTasks()

    const checkIfLogged = async () => {
      const response = await verifyUser()

      setIsLogedIn(response.success);
    }

    checkIfLogged()

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

          : <Link to="/Account" className="underline px-2 py-1 border">Register right now</Link>
      }
    </div>
  )
}

export default DashBoard