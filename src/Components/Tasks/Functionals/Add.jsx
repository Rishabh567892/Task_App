
const Add = ({ setIsCreatingNewTask }) => {

  const handleOnClick = () => {
    setIsCreatingNewTask(true)
  }

  return (
    // add button
    <div
      className="bg-black/20 w-fit aspect-square flex items-center justify-center rounded-full"
      onClick={handleOnClick}
    >
      <svg className="w-6 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>
    </div>
  )
}

export default Add