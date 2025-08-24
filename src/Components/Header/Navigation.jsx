import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="flex gap-10">
      <Link to="/">Tasks</Link>
      <Link to="/Account">Account</Link>
    </nav>
  )
}

export default Navigation