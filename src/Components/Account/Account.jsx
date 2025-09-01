import { useState } from 'react'
import Register from './Register'
import Login from './Login'
import Delete from './Delete'
import useAppContext from '../../useAppContext'
import { motion } from 'framer-motion'

const Account = () => {

  let buttonStyles = {
    className: "flex px-3 py-1 rounded-md border cursor-pointer",
    initial: { backgroundColor: "#f3f4f6" },
    whileHover: { backgroundColor: "rgba(var(--primary-c), 0.6)" },
    whileTap: { backgroundColor: "rgba(var(--primary-c), 0.6)" }
  }

  const { isLogedIn } = useAppContext();
  const [currentAuthentication, setCurrentAuthentication] = useState('register')

  return (
    <div className="flex flex-col p-3 gap-2">
      <div className="flex gap-2">
        {/* login & register page toggle button */}
        <motion.button {...buttonStyles} onClick={() => setCurrentAuthentication(pre => pre === "register" ? "login" : "register")}>
          {currentAuthentication === "register" ? "Login" : "Register"}
          <svg className="h-4 self-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
        </motion.button>

        {/* delete account button */}
        {isLogedIn && currentAuthentication != 'delete' ?
          <motion.button {...buttonStyles} onClick={() => setCurrentAuthentication("delete")}>
            Delete your account
          </motion.button>
          : null}
      </div>

      <h1 className="capitalize text-xl underline w-fit">{currentAuthentication}</h1>

      <div className="w-[min(450px,100%)]">
        {currentAuthentication === "register" ?
          <Register /> :
          currentAuthentication === "login" ?
            <Login /> :
            <Delete setCurrentAuthentication={setCurrentAuthentication} />
        }
      </div>
    </div>
  )
}

export default Account