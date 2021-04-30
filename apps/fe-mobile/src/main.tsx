import React from 'react';
import ReactDOM from 'react-dom';
import AppShell from './app-shell';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import * as serviceWorker from './service-worker';

ReactDOM.render(
  <React.StrictMode>
    <AppShell />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
defineCustomElements(window).then(() => {
  ReactDOM.render(<AppShell />, document.getElementById('root'));
});
*/

// ReactDOM.render(<AppShell />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
defineCustomElements(window);
