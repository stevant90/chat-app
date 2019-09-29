import axios from 'axios';
import { TOKEN } from '../constants/apiInfo';

export default function reduxAjax({ requestAction, successAction, errorAction, method, url, params, axiosArgs = {} }) {
  if (method === 'GET') {
    axiosArgs.params = params;
  } else {
    axiosArgs.headers = {
      'Content-Types': 'application/json',
      'token': TOKEN
    };
    axiosArgs.data = params;
  }

  return dispatch => {
    if (requestAction) {
      dispatch(requestAction(axiosArgs.params));
    }

    return axios({
      ...axiosArgs,
      url,
      method
    }).then(response => {
      if (successAction) {
        dispatch(successAction(response.data))
      }

      return response.data;

    }).catch(error => {
      if (errorAction) {
        dispatch(errorAction(error));
      }
    });
  }
}
