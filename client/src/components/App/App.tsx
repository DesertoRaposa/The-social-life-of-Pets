import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../store/'
import NotFound from '../NotFound/NotFound';
import Home from '../../Pages/Home';
import Register from '../Register/Register';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
        <Route path="/404" component={NotFound} />
        <Route path="/signup" component={Register} />
        <Home/>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;