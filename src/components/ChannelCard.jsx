import React from 'react';
import {Box, cardMedia, CardContent, Typography, CardMedia} from "@mui/material";
import { CheckCircle } from '@mui/icons-material';

import { demoProfilePicture } from '../Utilities/constants';
import { Link } from 'react-router-dom';

const ChannelCard = ({ channelDetail, marginTop}) => {
  console.log(channelDetail)
  return (
    <Box
    sx={{
      boxShadow:'none',
      borderRadius: '20px',
      alignItem:"center",
      display: "flex",
      justifyContent:"center",
      width: {xs:"356px", md:"275px"},
      height: "326px",
      margin:"auto",
      marginTop
    }}
    >
      <Link to= { `/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display:"flex", flexDirection:"column", alignItem:"center", color:"#fff", justifyContent:"center"}} >
           <CardMedia 
           image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
           sx={{ borderRadius:"50%", width:"180px", height:"180px", mb:2}}
           alt={channelDetail?.snippet?.title}
           />
           <Typography variant='h6' alignItems="center" display="flex" >
           { channelDetail?.snippet?.title } 
           <CheckCircle sx={{ color:"gray", alignItems:"center", textAlign:"center",ml:"5px"}} />
           </Typography>
           {channelDetail?.statistics?.subscribersCount && (
            <Typography>
              {
                parseInt(channelDetail?.statistics?.subscribersCount).toLocaleString()
              }
              Subscribers
            </Typography>
           )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard