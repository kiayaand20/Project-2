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
// import Form from './components/Form'

function App() {
  const [activity, setActivity] = useState([])
  // const [comments, setComments] = useState('')
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
              <h1>Whatever the Weather</h1>
              <Link to="/activity/spring">
                <img src="https://res.cloudinary.com/kacloud20/image/upload/v1638395378/Project%202/tulips-2254970__340_y49jwa.jpg"
                  alt="flowers" /></Link>
              <Link to="/activity/summer">
                <img src="https://res.cloudinary.com/kacloud20/image/upload/v1638397011/Project%202/beach-84560__340_k5m5tn.jpg"
                alt="beach" /></Link>
              <Link to="/activity/autumn">
                <img src="https://res.cloudinary.com/kacloud20/image/upload/v1638395238/Project%202/autumn-1649362__340_jaffmi.jpg"
                alt="leaves" /></Link>
              <Link to="/activity/winter">
                <img src="https://res.cloudinary.com/kacloud20/image/upload/v1638395167/Project%202/snow-5852352__340_gibdio.jpg"
                alt="snow" /></Link>
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
          element={<Autumn activity={activity} setToggle={setToggle}/>} />
        <Route
          path="/activity/winter"
          element={<Winter activity={activity} setToggle={setToggle}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
