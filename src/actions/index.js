import streams from '../api/streams';
import history from '../history';
import { ADD_STREAM, DELETE_STREAM, EDIT_STREAM, GET_STREAM, GET_STREAMS, SIGN_IN, SIGN_OUT } from './types';

export const signIn = userId => {
  return {
      type: SIGN_IN,
      payload: userId
  };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const addStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });
  dispatch({
    type: ADD_STREAM,
    payload: response.data
  });
  history.push('/');
};

export const getStreams = () => async dispatch => {
  const response = await streams.get('/streams');
  dispatch({
    type: GET_STREAMS,
    payload: response.data
  });
};

export const getStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({
    type: GET_STREAM,
    payload: response.data
  });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({
    type: EDIT_STREAM,
    payload: response.data
  });
  history.push('/');
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({
    type: DELETE_STREAM,
    payload: id
  });
  history.push('/');
};
