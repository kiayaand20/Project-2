import { useState, useEffect} from 'react'
import { postActivity } from '../services'
import { useNavigate, useParams } from 'react-router-dom'

export default function Form(props) {
  const [season, setSeason] = useState('')
  const [activity, setActivity] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const navigate = useNavigate()
  const {seasons} = useParams()

  useEffect(() => {
      const searchSeason= props.activity.find(activity=> {
        return activity.fields.season === seasons
      })
    setSeason(searchSeason)
  }, [seasons, props.activity])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newActivity = {
      season,
      activity,
      image,
      description
    }

    await postActivity(newActivity)
    props.setToggle(prevToggle => !prevToggle)
      navigate(`/activity/${season}`)
}
    
  return (
    <div>
      <label className="form-sent1">Let's create an Activity!</label>
      <br />
      <label className="form-sent2">Complete the form below:</label>
      <br />
    <form className="form" onSubmit={handleSubmit}>
      <select onChange={(e) => setSeason(e.target.value)}>
        <option disabled value>
          Select a Season
        </option>
        
        <option value='Autumn'>
          Autumn
        </option>
        
        <option value='Spring'>
          Spring
        </option>
        
        <option value='Summer'>
          Summer
        </option>
        
        <option value='Winter'>
          Winter
        </option>
      </select>

      <input
        type='text'
        value={activity}
          name='activity'
          placeholder='Activity Name'
        onChange={(e) => setActivity(e.target.value)}
      />
      <input
        type='text'
        value={image}
          name='image'
          placeholder='Image url'
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type='text'
        value={description}
          name='description'
          placeholder='Activity Description'
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Submit</button>
      </form>
    </div>
  )
}