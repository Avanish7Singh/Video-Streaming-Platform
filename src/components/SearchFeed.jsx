import React, { useEffect, useState } from 'react';
import { Stack, Box, Typography } from "@mui/material"
import { Sidebar, Videos} from './';
import { FetchFromAPI } from '../Utilities/FetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [ videos, setVideos ] = useState([]);
  const { searchTerm} = useParams()
  useEffect(() =>{
     FetchFromAPI(`search?part=snippet&q=${searchTerm}`)
     .then((data) => setVideos(data.items) )
  },[])
  return (
    <Box p={2} sx={{ height:"90vh", flex:2, overflowY:"auto"}} >
    <Typography mb={2} fontWeight="bold" fontSize="30px" color="white">
      Search Results for : 
      <span style={{color:"red",margin:"15px" }}>{searchTerm}</span> Videos
    </Typography>
     <Videos videos={videos}/>
  </Box>
  )
}

export default SearchFeed