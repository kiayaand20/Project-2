import { Link } from 'react-router-dom'

function Header(props) {
  return (
      <div className="header">
        <Link to='/' className="home">Home</Link>
        <label className="title" style={{ marginLeft: '23rem' }}>Whatever the Weather</label>
      </div>
  )
}

export default Header;