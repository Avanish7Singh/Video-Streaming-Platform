import React, { useEffect, useState } from 'react';
import { Stack, Box, Typography } from "@mui/material"
import { Sidebar, Videos} from './';
import { FetchFromAPI } from '../Utilities/FetchFromAPI';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New")
  const [ videos, setVideos ] = useState([])
  useEffect(() =>{
     FetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
     .then((data) => setVideos(data.items) )
  },[selectedCategory])
  
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: "auto", md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className='copyright' variant='body2' sx={{ color: "white", mt:"1.5" }}>
          copyright @2022
        </Typography>
      </Box>
      <Box p={2} sx={{ height:"90vh", flex:2, overflowY:"auto"}} >
        <Typography mb={2} fontWeight="bold" fontSize="30px" color="white">
          {selectedCategory}
          <span style={{color:"red",margin:"15px" }}>Videos</span>
        </Typography>
         <Videos videos={videos}/>
      </Box>
    </Stack>

  )
}

export default Feed