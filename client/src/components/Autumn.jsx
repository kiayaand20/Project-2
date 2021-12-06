import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// Resource for making cards with Material UI: 
// https://www.pluralsight.com/guides/styling-a-react-app-with-material-ui

function Autumn(props) {
  return (
    <div>
      <h1>Autumn Activities</h1>
        {
          props.activity.map((activity) => (
            activity.fields.season === "Autumn" ?
              <Card sx={{
                maxWidth: 350,
                display: 'inline-block',
                margin: '20px'
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
                  <Typography variant="body2" color="text.secondary">
                    {activity.fields.description}
                  </Typography>
                </CardContent>
              </Card>
              :
              null
          ))}
    </div>
  )
}

export default Autumn;