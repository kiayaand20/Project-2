import { Link } from 'react-router-dom'

function Header(props) {
  return (
      <div className="header">
        <Link to='/' className="home">Home</Link>
      <label className="title"><em>Whatever the Weather</em></label>
      {/* <label className="home-intro"> Whatever the Weather provides a variety
        of activity ideas for every season. In other words, fun for the
        entire year! Start your adventure by choosing a season below.
      </label> */}
      </div>
  )
}

export default Header;