import { Link } from 'react-router-dom'

function Header(props) {
  return (
      <div className="header">
        <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
        <label className="title">Whatever the Weather</label>
      </div>
  )
}

export default Header;