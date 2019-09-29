import { actionTypes } from '../constants/actionTypes';
import { BASE_URL } from '../constants/apiInfo';
import reduxAjax from '../adapters/reduxAjax';

const requestPostMessage = () => ({
  type: actionTypes.REQUEST_POST_MESSAGE
});

const receivedPostMessage = data => ({
  type: actionTypes.RECEIVED_POST_MESSAGE,
  data
});

const errorPostMessages = error => ({
  type: actionTypes.ERROR_POST_MESSAGES,
  error
});

export const postMessage = (params, callback) => {
  return dispatch => {
    dispatch(reduxAjax({
      requestAction: requestPostMessage,
      successAction: receivedPostMessage,
      errorAction: errorPostMessages,
      method: 'POST',
      url: `${BASE_URL}`,
      params
    })).then(() => callback())
      .catch(() => { });
  }
}