import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header/Header"
import DashBoard from "./Components/Tasks/DashBoard"
import Account from "./Components/Account/Account"

const App = () => {
  return (
    <div className="min-h-screen w-screen font-[SpaceGrotesk] bg-zinc-100 text-black">
      <Header />

      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
    </div>
  )
}

export default App