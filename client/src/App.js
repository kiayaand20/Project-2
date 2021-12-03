import './App.css';
import { useState, useEffect } from 'react'
import {grabActivity} from './services'


function App() {
  const [activity, setActivity] = useState([])
  // const [comments, setComments] = useState('')
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const getActivity = async () => {
      const res = await grabActivity()
      setActivity(res)
      console.log(res)
    }
    getActivity();
  }, [toggle])

  return (
    <div>
      
    </div>
  );
}

export default App;
