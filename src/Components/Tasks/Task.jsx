import { useState } from "react"
import Delete from "./Functionals/Delete"
import Edit from "./Functionals/Edit"

const Task = ({ value, taskNumber, setTasks }) => {

  // contains the value of the edited task or initially the original task
  const [taskValue, setTaskValue] = useState(value);

  return (
    <div className="flex bg-zinc-100 w-[max(200px,20%)] justify-between rounded-md border overflow-hidden">
      <input
        className="text-base w-full px-3 py-2 outline-0"
        type="text"
        value={taskValue}
        onChange={e => setTaskValue(e.target.value)}
      />
      <div className="flex">
        <Edit // gets activated whenever any change is made in the input
          taskNumber={taskNumber}
          taskValue={taskValue}
          setTaskValue={setTaskValue}
          startValue={value}
        />
        <Delete taskNumber={taskNumber} setTasks={setTasks} />
      </div>
    </div>
  )
}

export default Task