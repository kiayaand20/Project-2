import { Link } from 'react-router-dom'

function Header(props) {
  return (
      <div className="header">
        <Link to='/' className="home">Home</Link>
        <div className="title">
          <label>Whatever the Weather</label>
        </div>
      </div>
  )
}

export default Header;