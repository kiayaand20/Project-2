import axios from 'axios'

export const CONTENT_URL = `https://api.airtable.com/v0/${process.env.REACT_APP_CLIENT_BASE}/seasons`
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

export const postActivity = async (body) => {
  const res = await axios.post(CONTENT_URL, {fields: body}, config)
  return res.data
}


