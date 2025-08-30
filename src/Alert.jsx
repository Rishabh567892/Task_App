import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const Alert = ({ message, setMessage }) => {

  const [isVisible, setIsVisible] = useState(true)
  const hideAfter = useRef(null);

  useEffect(() => {

    if (message) {

      if (hideAfter.current) clearTimeout(hideAfter.current)

      setIsVisible(true);

      // hideAfter.current = setTimeout(() => {
      //   setIsVisible(false)
      //   setMessage("")
      // }, 3000)

    }

  }, [message])

  return (
    <AnimatePresence>
      {isVisible ?
        <motion.div
          className={`absolute left-5 text-lg px-3 py-1 border capitalize rounded-md bg-zinc-100`}
          initial={{ opacity: 0, bottom: -30 }}
          animate={{ opacity: 1, bottom: 30 }}
          exit={{ opacity: 0, bottom: -30 }}
          transition={{ duration: 0.5 }}
        >{message}</motion.div>
        : null
      }
    </AnimatePresence>
  )
}

export default Alert