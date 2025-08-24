import { useState } from 'react'
import Register from './Register'
import Login from './Login'

const Account = () => {

  const [currentAuthentication, setCurrentAuthentication] = useState('register')

  return (
    <div>
      <button
        className="px-3 py-1 m-3 bg-gray-300 rounded-2xl"
        onClick={() => setCurrentAuthentication(pre => pre === "register" ? "login" : "register")}>
        {currentAuthentication === "register" ? "login" : "register"}
      </button>
      {currentAuthentication === "register" ?
        <Register />
        : <Login />
      }
    </div>
  )
}

export default Account