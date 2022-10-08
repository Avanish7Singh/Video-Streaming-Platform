import React, { useState, useEffect } from 'react';
import { FetchFromAPI } from '../Utilities/FetchFromAPI';
import { Box, Typography, Stack } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from "./"

const VideoDetail = () => {
  const [videoDetail, setvideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    FetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setvideoDetail(data.items[0]))

    FetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setRelatedVideos(data.items))
  }, [id])
  if (!videoDetail?.snippet) return "Loading......";
  // console.log(relatedVideos,"#################")
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box sx={{ minHeight: "95vh" }}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={2}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player" controls
            />
            <Typography variant='h5' color="#fff" fontWeight="bold" px={1} >
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" py={2} px={1}>
              <Link to={`/channel/${id}`}>
                <Typography variant={{ xs: "subtitle1", md: "h6" }} color="#fff">
                  {channelTitle}
                  <CheckCircle sx={{ color: "gray", fontSize: "12px", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px">
                <Typography variant="body1" sx={{ opacity: "0.7", color: "#fff" }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: "0.7", color: "#fff" }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ xs: "5px", md: "1px" }} justifyContent="center" alignItems="center">
          <Videos videos={relatedVideos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail