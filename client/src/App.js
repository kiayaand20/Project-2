import './App.css';
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { grabActivity, grabComment } from './services'
import Header from './components/Header'
import Footer from './components/Footer'
import Autumn from './components/Autumn'
import Winter from './components/Winter'
import Spring from './components/Spring'
import Summer from './components/Summer'
import Form from './components/Form'

function App() {
  const [activity, setActivity] = useState([])
  const [comments, setComments] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const getActivity = async () => {
      const res = await grabActivity()
      setActivity(res)
    }
    getActivity();
  }, [toggle])

  useEffect(() => {
    const getComments = async () => {
      const res = await grabComment()
      setComments(res)
    }
    getComments();
  }, [toggle])

  return (
    <div>
      <Header/>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <h1>Whatever the Weather</h1>
              <h4>Fun Activity Ideas for every Season</h4>
              <h2> Select a Season below to explore your options:</h2>
                  <Link to="/activity/spring">
                    <img src="https://res.cloudinary.com/kacloud20/image/upload/v1638664794/Project%202/SPRING_hs8e4n.png"
                    alt="flowers" className="spring-img"/></Link>

                  <Link to="/activity/summer">
                    <img src="https://res.cloudinary.com/kacloud20/image/upload/v1638664895/Project%202/SUMMER_pctvg0.png"
                    alt="beach" /></Link>

                  <Link to="/activity/autumn">
                    <img src="https://res.cloudinary.com/kacloud20/image/upload/v1638664346/Project%202/AUTUMN_vqvakf.png"
                    alt="leaves" /></Link>

                  <Link to="/activity/winter">
                    <img src="https://res.cloudinary.com/kacloud20/image/upload/v1638664702/Project%202/WINTER_ui00xd.png"
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
          element={<Winter activity={activity} setToggle={setToggle} />} />
        
        <Route
          path="/autumn/:id"
          element={<Form comments={comments} setToggle={setToggle} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
