import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
// Resource for making cards with Material UI: 
// https://www.pluralsight.com/guides/styling-a-react-app-with-material-ui

function Autumn(props) {
  return (
    <div>
      <label className="pg-titles">Autumn Activities</label>
      <br />
      <label className="autumn-desc">Regardless of whether the leaves around you change or not,
        fall is a time for coziness, comfort food, and nice weather 🍁</label>
      <br />
        <Grid container 
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
          {
            props.activity.map((activity) => (
              activity.fields.season === "Autumn" ?
            
            <Grid item key={activity.id}>
              <Card sx={{
                maxWidth: 350,
                height: 375,
                display: 'inline-block',
                margin: '20px',
              }}
              >
              <CardHeader title={activity.fields.activity} />
              <CardMedia
                component="img"
                height="194"
                image={activity.fields.image}
                alt="activity"
                />
              <CardContent>
              <Typography variant="body2" color="black" >
                {activity.fields.description}
              </Typography>
              </CardContent>
              </Card>
            </Grid>
              :
              null
          ))}
      </Grid>
      <label className="add-link1"> <em>Have an activity idea you think
        others will enjoy? </em></label>
      <br />
      <Link to='/add/Autumn' style={{  textDecoration: 'underline', color: 'black' }}> 
          <label className="add-link2"><strong>Click here to add it to the list!</strong></label>
      </Link>
    </div>
  )
            
}
export default Autumn;