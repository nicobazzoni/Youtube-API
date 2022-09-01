import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Ticker from "react-ticker";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const [commentThreads, setCommentThreads] = useState(null);

  const { id } = useParams();

  console.log(channelDetail, videos);




  
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items)

      // const commentThreads = await fetchFromAPI(`commentThreads?=${id}&part=snippet%2Cid&order=date`);; 
       
      // setCommentThreads(commentThreads?.items[0])

      // console.log(commentThreads)

    
      
    };

    console.log(channelDetail, videos, commentThreads);
    
    

    fetchResults();
  }, [id]);

  useEffect(() => {
    const fetchResults2 = async () => {
      const data = await fetchFromAPI(`commentsThread?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items)

      // const commentThreads = await fetchFromAPI(`commentThreads?=${id}&part=snippet%2Cid&order=date`);; 
       
      // setCommentThreads(commentThreads?.items[0])

      // console.log(commentThreads)

    
      
    };

    console.log(channelDetail, videos, commentThreads);
    
    

    fetchResults2();
  }, [id]);

 

  return (
    <Box minHeight="95vh">
      <Box>
      
    
        <div style={{
          height:'200px',
          background: ' #000000',
          zIndex: 10,

          
          
        }}  
        />
        
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;