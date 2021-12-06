import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';

function Summer(props) {
  return (
    <div>
      <label>Summer Activities</label>
      <label className="summer-form"> Have an activity idea you think 
        others will enjoy? Add it to the list! </label>
        <Grid container 
            spacing={0}
            direction="row"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
              >
          {
            props.activity.map((activity) => (
              activity.fields.season === "Summer" ?
            
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
export default Summer;