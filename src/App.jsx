import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header/Header"
import DashBoard from "./Components/Tasks/DashBoard"
import Account from "./Components/Account/Account"
import { AppProvider } from "./useAppContext"
import { useEffect, useLayoutEffect, useState } from "react"
import Alert from "./Alert"
import { verifyUser } from "./Components/Account/Authentication"

const App = () => {

  const [message, setMessage] = useState("")
  const [isLogedIn, setIsLogedIn] = useState(false)

  useLayoutEffect(() => {
    const checkIfLogged = async () => {
      const response = await verifyUser()

      setIsLogedIn(response.success);
    }

    checkIfLogged()
  }, [])

  return (
    <AppProvider value={{ setMessage, isLogedIn, setIsLogedIn }}>

      <div className="min-h-screen w-screen font-[SpaceGrotesk] text-black bg-gradient-to-b from-zinc-100 from-50% to-[var(--primary)] to-150% bg-fixed text-xs lg:text-base">

        <Header />

        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/Account" element={<Account />} />
        </Routes>

        <Alert message={message} setMessage={setMessage} />
      </div>
    </AppProvider>
  )
}

export default App