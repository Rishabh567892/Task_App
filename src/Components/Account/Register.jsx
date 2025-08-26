import { useEffect, useState } from "react"
import AllFields from "./formFields"
import { registerUser } from "./Authentication"
import { useNavigate } from "react-router-dom"

const Register = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({})

  const handleOnClick = async e => {
    e.preventDefault() // stops it by removing the filled form if fails

    const response = await registerUser(formData)

    const { success, token, message } = response;

    if (!success) return null;

    localStorage.setItem("token", token)

    if (success) {
      navigate('/')
    }
  }

  return (
    <form className="p-3 gap-2" onSubmit={handleOnClick}>
      {
        Object.keys(AllFields).map((v, i) => {
          return (
            <div key={i} className="flex flex-col">
              {/* label for each input field */}
              <span>{v}</span>

              <input
                {...AllFields[v]}
                className="w-1/3 px-4 py-2 border hover:border-2 rounded-lg outline-none border-gray-700"
                value={formData[v] || ""}
                onChange={e => setFormData(pre => { return { ...pre, [v]: e.target.value } })}
              />
            </div>
          )
        })
      }
      <input type="submit" value="submit" className="px-3 py-1 m-3 bg-gray-300 rounded-2xl" />
    </form>
  )
}

export default Register