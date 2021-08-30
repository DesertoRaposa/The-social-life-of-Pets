import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/'
import NotFound from '../NotFound/NotFound';
import Home from '../../Pages/Home';


const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
        <Route path="/404" component={NotFound} />
        <Home/>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;