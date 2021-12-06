import { useState, useEffect } from 'react'
import { postComment, editComment } from '../services'
import { useNavigate, useParams } from 'react-router-dom'

export default function Form(props) {
  const [name, setName] = useState('')
  const [activity, setActivity] = useState('')
  const [comment, setComment] = useState('')
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    if (props.comments) {
      const searchComments = props.comments.find(comments=> {
        return comments.id === params.id
      })
      if (searchComments) {
        setName(searchComments.fields.title)
        setActivity(searchComments.fields.activity)
        setComment(searchComments.fields.comment)
      }
    }
  }, [params.id, props.comments])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newComment = {
      name,
      activity,
      comment
    }
    if (props.books) {
      const res = await editComment(newComment, params.id)
      props.setToggle(prevToggle => !prevToggle)
      if (res) {
        navigate(`/autumn/${params.id}`)
      }
    } else {
      const res = await postComment(newComment)
      props.setToggle(prevToggle => !prevToggle)
      if (res) {
        navigate(`/activity/autumn`)
      }
    }

  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type='text'
        value={name}
        name='name'
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        value={activity}
        name='activity'
        onChange={(e) => setActivity(e.target.value)}
      />
      <input
        type='text'
        value={comment}
        name='comment'
        onChange={(e) => setComment(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}