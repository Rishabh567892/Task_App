import { useRef, useState } from "react"
import AllFields from "./formFields"
import { loginUser } from "./Authentication"
import { useNavigate } from "react-router-dom"
import useAppContext from "../../useAppContext"
import Input from "./Input"
import SubmitBtn from "./SubmitBtn"

const Login = () => {

  const { setMessage, setIsLogedIn } = useAppContext()

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
      setIsLogedIn(true)
      setFormData({})
      navigate('/')
    }
  }

  const fields = ["email", "password"]

  return (
    <form className="gap-2" onSubmit={handleOnClick}>
      {
        fields.map((v, i) => {
          return (
            <div key={i} className="flex flex-col mb-3">
              {/* label for each input field */}
              <span className="capitalize">{v}</span>

              <Input
                key={i}
                v={v}
                i={i}
                inputRefs={inputRefs}
                formData={formData}
                setFormData={setFormData}
                AllFields={AllFields}
              />
            </div>
          )
        })
      }

      <SubmitBtn />
    </form>
  )
}

export default Login