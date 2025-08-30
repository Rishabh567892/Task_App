import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header/Header"
import DashBoard from "./Components/Tasks/DashBoard"
import Account from "./Components/Account/Account"
import { AppProvider } from "./useAppContext"
import { useState } from "react"
import Alert from "./Alert"

const App = () => {

  const [message, setMessage] = useState("hyuv")

  return (
    <AppProvider value={{
      setMessage
    }}>
      <div className="min-h-screen w-screen font-[SpaceGrotesk] text-black bg-gradient-to-b from-zinc-100 from-30% to-gray-400 to-95% bg-fixed">

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