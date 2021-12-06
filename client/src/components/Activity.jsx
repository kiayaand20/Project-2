import { Link } from 'react-router-dom'

function Activity() {
  return (
    <div className="home-imgs">
    <Link to="/activity/spring">
      <img src="https://res.cloudinary.com/kacloud20/image/upload/c_scale,h_340,w_480/v1638766866/Project%202/SPRING_1_t7y2r4.png"
      alt="flowers" /></Link>

    <Link to="/activity/summer">
      <img src="https://res.cloudinary.com/kacloud20/image/upload/c_scale,h_340,w_480/v1638766861/Project%202/SUMMER_1_f0xl59.png"
      alt="beach" /></Link>

    <Link to="/activity/autumn">
      <img src="https://res.cloudinary.com/kacloud20/image/upload/v1638664346/Project%202/AUTUMN_vqvakf.png"
      alt="leaves" /></Link>

    <Link to="/activity/winter">
      <img src="https://res.cloudinary.com/kacloud20/image/upload/c_scale,h_340,w_480/v1638766869/Project%202/WINTER_1_nwdpfy.png"
      alt="snow" /></Link>
  </div> 
  )
}

export default Activity;


