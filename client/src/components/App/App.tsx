import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store/'

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <div className="test"> HI there!!!!!</div>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;