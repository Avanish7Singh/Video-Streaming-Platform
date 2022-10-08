import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { ChannelCard} from "./";
import Videos from "./Videos"
import { FetchFromAPI } from '../Utilities/FetchFromAPI';


const ChannelDetail = () => {
  const {id} = useParams()
  const [channelDetail, setChannelDetail] = useState(null)
  const [channelVideos, setChannelVideos] = useState([])
  // console.log(channelDetail, channelVideos)
  useEffect(() =>{
    FetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))

    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setChannelVideos(data?.items))
  },[id])
  return (
    <Box sx={{minHeight:"95vh"}}>
      <Box>
        <div 
        style={{
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(187,5,54,1) 100%, rgba(0,212,255,1) 100%)",
          height: "270px",
          zIndex:"10px"
        }}
      />
      <ChannelCard channelDetail={channelDetail} marginTop={"-95px"} />
      </Box>
      <Box sx={{ ml:{ sm:"100px"}}}>
        <Videos videos={channelVideos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail