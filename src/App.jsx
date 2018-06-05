import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Header, Box } from './containers';
import { Footer } from './components';
import './App.css';
import configureStore from './store/configureStore';

const App = () => (
  <Provider store={configureStore()}>
    <React.Fragment>
      <Header />
      <Box />
      <Footer />
    </React.Fragment>
  </Provider>
);

export default hot(module)(App);
