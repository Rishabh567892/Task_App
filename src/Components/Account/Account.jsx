import { useState } from 'react'
import Register from './Register'
import Login from './Login'

const Account = () => {

  const [currentAuthentication, setCurrentAuthentication] = useState('register')

  return (
    <div>
      <button
        className="flex px-3 py-1 m-3 bg-gray-100 rounded-md border"
        onClick={() => setCurrentAuthentication(pre => pre === "register" ? "login" : "register")}>
        {currentAuthentication === "register" ? "login" : "register"}
        <svg className="h-4 self-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
      </button>
      <h1 className="capitalize text-xl underline ml-5">{currentAuthentication}</h1>
      {currentAuthentication === "register" ?
        <Register />
        : <Login />
      }
    </div>
  )
}

export default Account