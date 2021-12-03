import axios from 'axios'

export const CONTENT_URL = `https://api.airtable.com/v0/${process.env.REACT_APP_CLIENT_BASE}/seasons`
// export const COMMENT_URL = `http://api.airtable.com/v0/${process.env.REACT_APP_CLIENT_BASE}/comments`
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_CLIENT_KEY}`
  }
}

export const grabActivity = async () => {
  const res = await axios.get(CONTENT_URL, config)
  return res.data.records
}