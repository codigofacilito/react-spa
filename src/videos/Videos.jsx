import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadVideos } from '../store/videos';
import { SmallContainer } from '../theme';
import Video from './Video';


let Videos = (props) => {
  let videosState = useSelector(state => state.videos);
  let dispatch = useDispatch();
  useEffect(()=>{
    dispatch(
      loadVideos()
    )
  },[]);

  

  return(
    <div>
      <SmallContainer>
        {
          videosState.data.videos.map( (video,index) => (
            <Video index={index} video={video}></Video>
          ))
        }
      </SmallContainer>
    </div>
  )
}

export default Videos;