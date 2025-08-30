import { useState } from "react";
import useAppContext from "../../useAppContext";
import { deleteUser } from "./Authentication"

const Delete = ({setCurrentAuthentication}) => {

  const {setMessage, setIsLogedIn} = useAppContext();
  const [inputValue, setInputValue] = useState("")

  const handleOnClick = async () => {
    const response = await deleteUser(inputValue);

    if (response.success) {
      localStorage.removeItem("token")
      setMessage(response.message);
      setIsLogedIn(false)
      setCurrentAuthentication("register")
    }
  }

  return (
    <div className="flex flex-col gap-3 ml-5">
      <p>Delete your account</p>
      <input
      type="password"
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
      className="w-1/3 px-4 py-2 bg-white border rounded-lg outline-none hover:border-cyan-500"
      placeholder="Enter Password..."
      />
      <button className="flex items-center rounded-md w-fit cursor-pointer px-2 py-1 border border-red-500 text-red-500" onClick={handleOnClick}>
        <svg className='h-7 aspect-square p-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
        Delete your account
      </button>
    </div>
  )
}

export default Delete