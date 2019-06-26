import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './store';
import App from './components/App/App';
import './assets/styles/style.css';


const renderApp = (Root) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Root />
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderApp(App);


if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept('./components/App/App.jsx', () => {
    renderApp(App);
  });
}
