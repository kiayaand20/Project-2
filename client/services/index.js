// import axios from 'axios'

export const CONTENT_URL = `https://api.airtable.com/v0/${process.env.REACT_APP_CLIENT_BASE}/content`
export const COMMENT_URL = `https://api.airtable.com/v0/${process.env.REACT_APP_CLIENT_BASE}/comments`

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_CLIENT_KEY}`
  }
}

