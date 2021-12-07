import { Link } from 'react-router-dom'
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url: 'https://res.cloudinary.com/kacloud20/image/upload/v1638826053/Project%202/test_z0wh65.jpg',
    title: 'SPRING',
    width: '50%',
    season: "spring"
  },
  {
    url: 'https://res.cloudinary.com/kacloud20/image/upload/v1638887664/Project%202/palm_ersz3g.webp',
    title: 'SUMMER',
    width: '50%',
    season: "summer"
  },
  {
    url: 'https://res.cloudinary.com/kacloud20/image/upload/v1638887666/Project%202/leaves_tpd6xk.webp',
    title: 'AUTUMN',
    width: '50%',
    season: "autumn"
  },
  {
    url: 'https://res.cloudinary.com/kacloud20/image/upload/v1638887664/Project%202/snow_lmjxdw.webp',
    title: 'WINTER',
    width: '50%',
    season: "winter"
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', 
    height: 200,
  },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Link to={`/activity/${image.season}`}>
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
                color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
          </Link>
          </ImageButton>
        
      ))}
    </Box>
  );
}




// function Activity() {
//   return (
//     <div className="home-imgs">
//     <Link to="/activity/spring">
//       <img src="https://res.cloudinary.com/kacloud20/image/upload/c_scale,h_340,w_480/v1638766866/Project%202/SPRING_1_t7y2r4.png"
//       alt="flowers" /></Link>

//     <Link to="/activity/summer">
//       <img src="https://res.cloudinary.com/kacloud20/image/upload/c_scale,h_340,w_480/v1638766861/Project%202/SUMMER_1_f0xl59.png"
//       alt="beach" /></Link>

//     <Link to="/activity/autumn">
//       <img src="https://res.cloudinary.com/kacloud20/image/upload/v1638664346/Project%202/AUTUMN_vqvakf.png"
//       alt="leaves" /></Link>

//     <Link to="/activity/winter">
//       <img src="https://res.cloudinary.com/kacloud20/image/upload/c_scale,h_340,w_480/v1638766869/Project%202/WINTER_1_nwdpfy.png"
//       alt="snow" /></Link>
//     </div>
  
//   )
// }

// export default Activity;

