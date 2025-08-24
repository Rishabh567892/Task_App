import { useState } from "react"
import Delete from "./Functionals/Delete"
import Edit from "./Functionals/Edit"

const Task = ({ value, taskNum, setTasks }) => {

  // contains the value of the edited task or initially the original task
  const [taskValue, setTaskValue] = useState(value);

  return (
    <div className="flex bg-zinc-200 px-3 py-2 w-[max(200px,20%)] justify-between rounded-md">
      <input
        className="text-base w-full"
        type="text"
        value={taskValue}
        onChange={e => setTaskValue(e.target.value)}
      />
      <div className="flex gap-4">
        <Edit // gets activated whenever any change is made in the input
          taskNum={taskNum}
          initialValue={value}
          taskValue={taskValue}
          setTasks={setTasks}
        />
        <Delete taskNum={taskNum} />
      </div>
    </div>
  )
}

export default Task