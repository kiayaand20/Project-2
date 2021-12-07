import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div className="header">
      <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
      <label>Whatever the Weather</label>
    </div>
  )
}

export default Header;