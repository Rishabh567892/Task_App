import { useEffect, useRef, useState } from "react"
import AllFields from "./formFields"
import { loginUser } from "./Authentication"
import { useNavigate } from "react-router-dom"
import useAppContext from "../../useAppContext"

const Login = () => {

  const { setMessage } = useAppContext()

  const navigate = useNavigate()

  const [formData, setFormData] = useState({})
  const inputRefs = useRef({})

  const handleOnClick = async e => {
    e.preventDefault() // stops it by removing the filled form if fails

    const response = await loginUser(formData)

    const { success, token, message } = response;

    setMessage(() => message || "");

    if (!success) return null;

    localStorage.setItem("token", token)

    if (success) {
      navigate('/')
      setFormData({})
    }
  }

  const fields = ["email", "password"]

  const handleKeyUp = (e, i) => {
    const nextInput = inputRefs.current[i+1]

    nextInput && (e.key == "Enter") && nextInput.focus()
  }

  return (
    <form className="p-3 gap-2" onSubmit={handleOnClick}>
      {
        fields.map((v, i) => {
          return (
            <div key={i} className="flex flex-col mb-3">
              {/* label for each input field */}
              <span className="capitalize">{v}</span>

              <input
                {...AllFields[v]}
                ref={el => inputRefs.current[v] = el}
                className="w-1/3 px-4 py-2 bg-white border rounded-lg outline-none hover:border-cyan-500"
                value={formData[v] || ""}
                onChange={e => setFormData(pre => { return { ...pre, [v]: e.target.value } })}
                onKeyUp={e => handleKeyUp(e,i)}
              />
            </div>
          )
        })
      }

      <input type="submit" value="Submit" className="px-3 py-1 m-3 bg-gray-100 rounded-md border" />
    </form>
  )
}

export default Login