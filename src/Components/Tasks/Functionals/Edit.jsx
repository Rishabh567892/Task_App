import { useEffect, useState } from "react";
import { editTask } from "../Backend_Operations";
import useAppContext from "../../../useAppContext";

const Edit = ({ taskNumber, taskValue, startValue, setTaskValue }) => {

  const {setMessage} = useAppContext();

  // checks whether the new task value is different from the starting value
  const [isChanged, setIsChanged] = useState(false);

  // it stores a value for comparing it with the value of task(input element)
  const [initialValue, setInitialValue] = useState(startValue)

  useEffect(() => {
    setIsChanged(initialValue !== taskValue) // checks value change
  }, [taskValue])

  const handleOnClick = async () => {

    if (!isChanged) return null;

    const response = await editTask({
      replacementNumber: taskNumber,
      newTask: taskValue
    })

    const { success, message, newTask } = response;

    setMessage(message)

    if (success) {

      // gets the task value by removing the task-number part
      let value = newTask.substring(String(newTask.split("-")[0]).length + 1);
      setInitialValue(value);
      setTaskValue(value);
      setIsChanged(false); // because it was creating a bug so set to false
    }
  }

  return (
    <div
      className={`relative z-2 flex items-center cursor-pointer outline hover:bg-zinc-200 ${!isChanged ? "pointer-events-none" : ''}`}
      onClick={handleOnClick}
    >
      <svg className={`h-7 aspect-square p-1 ${!isChanged ? "opacity-50" : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.41421 15.89L16.5563 5.74785L15.1421 4.33363L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21231C14.8256 1.82179 15.4587 1.82179 15.8492 2.21231L18.6777 5.04074C19.0682 5.43126 19.0682 6.06443 18.6777 6.45495L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"></path></svg>
    </div>
  )
}

export default Edit