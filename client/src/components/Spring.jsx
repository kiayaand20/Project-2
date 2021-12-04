import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Spring(props) {
  return (
    <div>
      {
        props.activity.map((activity) => (
          activity.fields.season === "Spring" ?
            <>
              <Card sx={{ maxWidth: 300 }}>
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
            </>
            :
            null
        ))
      }
    </div>
  )
}

export default Spring;