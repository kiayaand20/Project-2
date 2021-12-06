import { useState, useEffect } from 'react'
import { postActivity } from '../services'
import { useNavigate, useParams } from 'react-router-dom'

export default function Form(props) {
  const [season, setSeason] = useState('')
  const [activity, setActivity] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    if (props.activity) {
      const searchActivity= props.activity.find(activity=> {
        return activity.id === params.id
      })
      if (searchActivity) {
        setActivity(searchActivity.fields.activity)
        setImage(searchActivity.fields.image)
        setDescription(searchActivity.fields.description)
      }
    }
  }, [params.id, props.activity])

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
      navigate(`/`)
}
    
  return (
    <div>
      <h1>Let's create an Activity!</h1>
      <h3>Complete the form below:</h3>
    <form className="form" onSubmit={handleSubmit}>
      <select onChange={(e) => setSeason(e.target.value)}>
        <option disabled selected>
          Please select a Season
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
        onChange={(e) => setActivity(e.target.value)}
      />
      <input
        type='text'
        value={image}
        name='image'
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type='text'
        value={description}
        name='description'
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Submit</button>
      </form>
    </div>
  )
}