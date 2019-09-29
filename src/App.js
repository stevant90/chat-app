import React from 'react';
import { Provider } from 'react-redux';

import store from './Redux/store';

const App = () => (
  <Provider store={store}>
    <div>App</div>
  </Provider>
);

export default App;