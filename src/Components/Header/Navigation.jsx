import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="flex gap-5 md:gap-10">
      <Link to="/" className="hover:text-[var(--primary)] hover:underline">Tasks</Link>
      <Link to="/Account" className="hover:text-[var(--primary)] hover:underline">Account</Link>
    </nav>
  )
}

export default Navigation