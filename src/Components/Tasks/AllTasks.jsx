import { useState } from 'react'
import Task from './Task'

const AllTasks = ({tasks, setTasks}) => {

  return (
    tasks.map((v, i) => {
      let taskNum = v.split("-")[0]
      let value = v.substring(Number(taskNum.length) + 1);
      return <Task key={i} value={value} taskNum={taskNum} setTasks={setTasks} />
    })
  )
}

export default AllTasks