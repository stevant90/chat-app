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

  return async dispatch => {
    if (requestAction) {
      dispatch(requestAction(axiosArgs.params));
    }

    const response = axios({
      ...axiosArgs,
      method,
      url
    });

    await response;

    if (successAction) {
      dispatch(successAction(response.data))
      return response.data;
    }

    if (errorAction) {
      dispatch(errorAction(response.data.error));
    }    
  }
}
