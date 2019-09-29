import { actionTypes } from '../constants/actionTypes';
import { BASE_URL, TOKEN } from '../constants/apiInfo';
import reduxAjax from '../adapters/reduxAjax';

const requestMessages = () => ({
  type: actionTypes.REQUEST_MESSAGES
});

const receivedMessages = data => ({
  type: actionTypes.RECEIVED_MESSAGES,
  data
});

const errorMessages = error => ({
  type: actionTypes.ERROR_MESSAGES,
  error
});

export const getMessages = () => {
  return reduxAjax({
    requestAction: requestMessages,
    successAction: receivedMessages,
    errorAction: errorMessages,
    method: 'GET',
    url: `${BASE_URL}?token=${TOKEN}`
  });
}