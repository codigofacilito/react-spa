import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

let Thumbnail = styled.div`
  padding-bottom:177%;
  margin-bottom:${({ theme }) => theme.dims.margin.normal};
  background-image: ${({ video }) => `url(${video.thumbnail})` };
  background-size: cover;
  background-position: center;
`;

let VideoThumbnail = ({video}) => {
  return(
    <Link to={`/videos/${video.id}`}>
      <Thumbnail video={video}></Thumbnail>
    </Link>
  )
}

export default VideoThumbnail;