import { actionTypes } from '../constants/actionTypes';

const initialState = {
  messages: []
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_MESSAGES:
      return { ...state };
    case actionTypes.RECEIVED_MESSAGES:
      return {
        ...state,
        messages: action.data
      };
    case actionTypes.ERROR_MESSAGES:
      return { ...state };
    default:
      return state;
  }
}