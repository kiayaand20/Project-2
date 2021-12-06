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
import Activity from './components/Activity'
import Form from './components/Form'
import { useParams } from 'react-router-dom'

function App() {
  const [activity, setActivity] = useState([])
  const [toggle, setToggle] = useState(false)
  const {seasons} = useParams()

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
          path="/"
          element={<Activity />} />
        <Route
          path="/activity/:seasons"
          element={`<${seasons} />`} />
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

        <Route
          path="/activity/add"
          element={<Form activity={activity} setToggle={setToggle} />}
        />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
