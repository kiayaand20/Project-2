import './App.css';
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { grabActivity } from './services'
import Header from './components/Header'
import Footer from './components/Footer'
import Autumn from './components/Autumn'
import Winter from './components/Winter'
import Spring from './components/Spring'
import Summer from './components/Summer'
import Form from './components/Form'

function App() {
  const [activity, setActivity] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const getActivity = async () => {
      const res = await grabActivity()
      setActivity(res)
    }
    getActivity();
  }, [toggle])

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <h1 className="title">Whatever the Weather</h1>
              <h4 className="mini-title">Fun Activity Ideas for every Season</h4>
              <h2> Select a Season below to explore your options:</h2>
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
            </div>
          }
        />
        <Route
          path="/activity/spring"
          element={<Spring activity={activity} setToggle={setToggle}/>} />
        <Route
          path="/activity/summer"
          element={<Summer activity={activity} setToggle={setToggle}/>} />
        <Route
          path="/activity/autumn"
          element={<Autumn activity={activity} setToggle={setToggle} />} />
        <Route
          path="/activity/winter"
          element={<Winter activity={activity} setToggle={setToggle} />} />
      </Routes>

      <Form activity={activity} setToggle={setToggle} />
      <Footer />
    </div>
  );
}

export default App;
