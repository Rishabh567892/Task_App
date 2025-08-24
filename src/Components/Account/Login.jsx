import { useEffect, useState } from "react"
import AllFields from "./formFields"
import { loginUser } from "./Authentication"

const Login = () => {

  const [formData, setFormData] = useState({})

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const handleOnClick = async e => {
    e.preventDefault()

    const response = await loginUser(formData)

    console.log(response)

    const { success, token, message } = response;

    localStorage.setItem("token", token)

    if (success) {
      navigate('/')
    }
  }

  return (
    <form className="p-3 gap-2" onSubmit={handleOnClick}>
      {
        ["email", "password"].map((v, i) => {
          return <div key={i} className="flex flex-col">
            <span>{v}</span>
            <input
              {...AllFields[v]}
              className="w-1/3 px-4 py-2 border hover:border-2 rounded-lg outline-none border-gray-700"
              value={formData[v] || ""}
              onChange={e => setFormData(pre => { return { ...pre, [v]: e.target.value } })}
            />
          </div>
        })
      }
      <input type="submit" value="submit" className="px-3 py-1 m-3 bg-gray-300 rounded-2xl" />
    </form>
  )
}

export default Login