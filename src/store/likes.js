import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit';
import Axios from 'axios';
import apiConfig from '../config/api';

export const likeVideo = createAsyncThunk('likes/create', async (videoId, thunkAPI) => {
  let token;
  try {
    token = thunkAPI.getState().user.user.jwtToken;
  } catch {
    return Promise.reject('No hay token');
  }

  if (!token) return Promise.reject('No hay token');

  let response = await Axios.post(`${apiConfig.domain}/likes`, {
    like: {
      videoId: videoId
    }
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.data;
})

let likeSlice = createSlice({
  name: 'like',
  initialState: {
    status: 'not_loaded',
    data: {}
  },
  extraReducers: {
    [likeVideo.fulfilled]: (state,action)=>{
      state.status = 'success';
      state.data = action.payload;
    }
  }
})

export default likeSlice.reducer;