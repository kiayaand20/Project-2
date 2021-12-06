import axios from 'axios'

export const CONTENT_URL = `https://api.airtable.com/v0/${process.env.REACT_APP_CLIENT_BASE}/seasons`
export const COMMENT_URL = `http://api.airtable.com/v0/${process.env.REACT_APP_CLIENT_BASE}/comments`
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_CLIENT_KEY}`
  }
}

// Activity
export const grabActivity = async () => {
  const res = await axios.get(CONTENT_URL, config)
  return res.data.records
}

// Comments
export const grabComment = async () => {
  const res = await axios.get(COMMENT_URL, config)
  return res.data.records
}

export const postComment = async (body) => {
  const res = await axios.post(COMMENT_URL, {fields: body}, config)
  return res.data
}

export const editComment = async (body, id) => {
  const res = await axios.put(`${COMMENT_URL}/${id}`, { fields: body }, config)
  return res.data
}

