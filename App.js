import React from 'react';
import {Provider} from 'react-redux';

import {HomeScreen} from './src/screens';
import configureStore from './src/state/store';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
