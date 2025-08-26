import { useEffect, useRef, useState } from "react"
import { addTask } from "./Backend_Operations"

const NewTask = ({ setTasks, isCreatingNewTask, setIsCreatingNewTask }) => {

  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    isCreatingNewTask && inputRef.current && inputRef.current.focus()
  }, [isCreatingNewTask])

  // handles saving data and adding a new task to tasks array when enter key is pressed
  const handleOnClick = async () => {
    setIsCreatingNewTask(false);

    const response = await addTask(inputValue)

    const { success, newTask } = response;

    if (success) {
      setTasks(pre => [...pre, newTask])
    }

    setInputValue("")
  }

  return isCreatingNewTask ?
    // focuses on input tag whenever clicked anywhere on the entire task-card
    <div className="flex bg-zinc-200 px-3 py-2 w-1/5 justify-between rounded-md" onClick={() => inputRef.current.focus()}>
      <div className="cover h-screen w-screen absolute z-[1] top-0 left-0"></div>
      <input
        ref={inputRef}
        className="text-base relative z-[2] w-md"
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyUp={e => e.key == "Enter" && handleOnClick()}
      />
      {/* delete button */}
      <div className='cursor-pointer relative z-[2]' onClick={() => setIsCreatingNewTask(false)}>
        <svg className='h-7 aspect-square p-1 hover:bg-white rounded-md hover:border-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
      </div>
    </div>
    : null
}

export default NewTask