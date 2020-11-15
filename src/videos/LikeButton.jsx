import React from 'react';
import { useDispatch } from 'react-redux';
import { likeVideo } from '../store/likes';
import { ClearButton, SvgButton } from '../theme';

let LikeButton = ({video}) => {
  let dispatch = useDispatch();

  let doLike = (videoId) => {
    dispatch(
      likeVideo(videoId)
    )
  }
  return(
    <ClearButton onClick={() => doLike(video.id)}>
      <SvgButton src="/heart.svg" active={video.isLikedByCurrentUser}></SvgButton>
    </ClearButton>
  )
}

export default LikeButton;