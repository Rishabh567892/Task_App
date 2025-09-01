import { motion } from "framer-motion"

const Add = ({ setIsCreatingNewTask }) => {

  const handleOnClick = () => {
    setIsCreatingNewTask(true)
  }

  return (
    // add button
    <motion.div
      className="border w-10 aspect-square p-2 flex items-center justify-center cursor-pointer border-[var(--dark)]"
      onClick={handleOnClick}
      initial={{ rotate: 0, backgroundColor: "#fff", color: "#000", borderRadius: "50%" }}
      whileHover={{ rotate: "180deg",backgroundColor: "var(--primary)", color: "#fff", borderRadius: "5px" }}
      whileTap={{ backgroundColor: "var(--primary)", color: "#fff" }}
      transition={{ duration: 0.5 }}
    >
      <svg
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
      </svg>
    </motion.div>
  )
}

export default Add