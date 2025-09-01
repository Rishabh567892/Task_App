import Navigation from "./Navigation"

const Header = () => {
  return (
    <header className="relative flex justify-center items-center px-3 py-2 overflow-hidden bg-zinc-100">

      <p className="text-lg md:text-xl absolute left-4 text-[var(--dark)]">Task App</p>

      <Navigation />

    </header>
  )
}

export default Header