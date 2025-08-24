import Navigation from "./Navigation"

const Header = () => {
  return (
    <header className="relative flex justify-center items-center px-4 py-2 overflow-hidden bg-zinc-200">

      <p className="text-xl absolute left-4">Task App</p>

      <Navigation />

    </header>
  )
}

export default Header