import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div>
      <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
    </div>
  )
}

export default Header;