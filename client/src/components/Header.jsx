import { Link } from 'react-router-dom'

function Header(props) {
  return (
      <div className="header">
        <Link to='/' className="home">Home</Link>
        <label className="title">Whatever the Weather</label>
      </div>
  )
}

export default Header;