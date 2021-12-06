import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';

function Winter(props) {
  return (
    <div>
      <h1>Winter Activities</h1>
      <h3 className="winter-form"> Have an activity idea you think 
        others will enjoy? Add it to the list! </h3>
        <Grid container 
            spacing={0}
            direction="row"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
              >
          {
            props.activity.map((activity) => (
              activity.fields.season === "Winter" ?
            
            <Grid item>
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
              <Typography variant="body2" color="black">
                {activity.fields.description}
              </Typography>
              </CardContent>
              </Card>
            </Grid>
              :
              null
          ))}
        </Grid>
    </div>
  )
            
}
export default Winter;