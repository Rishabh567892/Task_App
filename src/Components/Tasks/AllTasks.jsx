import { useState } from 'react'
import Task from './Task'

const AllTasks = ({ tasks, setTasks }) => {

  return (

    // if undefinded
    !tasks ? <span>loading...</span> :

      // if the value is Network Error, it is set by the fetchTasks()
      tasks === "Network Error" ? <span>Network Error</span> :

        // checks for length of tasks
        tasks.length ?
          tasks.map((v, i) => {
            let taskNumber = v.split("-")[0]
            let value = v.substring(String(taskNumber).length + 1);
            return <Task key={taskNumber} value={value} taskNumber={taskNumber} setTasks={setTasks} />
          })

          // if length of tasks is 0
          : <span>No Tasks Found</span>

  )
}

export default AllTasks