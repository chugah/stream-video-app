import _ from 'lodash';
import { ADD_STREAM, DELETE_STREAM, EDIT_STREAM, GET_STREAM, GET_STREAMS } from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case ADD_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_STREAM:
      return _.omit(state, action.payload);

    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case GET_STREAM:
      return { ...state, [action.payload.id]: action.payload  };

    case GET_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };

    default:
      return state;
  }
}
