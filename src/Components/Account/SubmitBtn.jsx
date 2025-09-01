import { motion } from "framer-motion"

const SubmitBtn = () => {
  return (
    <motion.input
      type="submit"
      value="Submit"
      className="px-3 py-1 m-3 rounded-md border cursor-pointer"
      initial={{color: "var(--dark)", backgroundColor: "#f3f4f6"}}
      whileHover={{color: "#fff", backgroundColor: "var(--primary)"}}
      whileTap={{color: "#fff", backgroundColor: "var(--primary)"}}
    />
  )
}

export default SubmitBtn