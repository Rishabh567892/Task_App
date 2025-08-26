import { useState } from 'react'
import Task from './Task'

const AllTasks = ({ tasks, setTasks }) => {

  return (

    !tasks ? <span>loading...</span> :

      tasks === "Network Error" ? <span>Network Error</span> :

        tasks.length ?
          tasks.map((v, i) => {
            let taskNumber = v.split("-")[0]
            let value = v.substring(String(taskNumber).length + 1);
            return <Task key={taskNumber} value={value} taskNumber={taskNumber} setTasks={setTasks} />
          })

          : <span>No Tasks Found</span>

  )
}

export default AllTasks