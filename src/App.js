import React from 'react';
import { Provider } from 'react-redux';

import store from './Redux/store';
import AppContainer from './components/AppContainer';

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;