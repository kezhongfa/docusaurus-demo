module.exports.clientEntryTemplate = `
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ExecutionEnvironment from './exports/ExecutionEnvironment';
import App from './App';
import preload from './preload';
import docusaurus from './docusaurus';

// Client-side render (e.g: running in browser) to become single-page
// application (SPA).

function render(props) {
      window.docusaurus = docusaurus;
      // For production, attempt to hydrate existing markup for performant
      // first-load experience.
      // For development, there is no existing markup so we had to render it.
      // We also preload async component to avoid first-load loading screen.
      const renderMethod = process.env.NODE_ENV === 'production' ? ReactDOM.hydrate : ReactDOM.render;
      preload(window.location.pathname).then(() => {
          renderMethod(<HelmetProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>, props.container
      ? props.container.querySelector("#__docusaurus")
      : document.getElementById("__docusaurus"));
      });
      // Webpack Hot Module Replacement API
      if (module.hot) {
          // Self-accepting method/ trick
          // (https://github.com/webpack/webpack-dev-server/issues/100#issuecomment-290911036)
          module.hot.accept();
      }
}

if (ExecutionEnvironment.canUseDOM) {
  if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }
  if (!window.__POWERED_BY_QIANKUN__) {
    render({});
  }
}

export async function bootstrap() {
  console.log("bootstraped");
}

export async function mount(props) {
  console.log("mount:", props);
  render(props)
}

export async function unmount(props) {
  console.log("unmount:", props);
  ReactDOM.unmountComponentAtNode(
    props.container
      ? props.container.querySelector("#__docusaurus")
      : document.getElementById("__docusaurus")
  );
}
`;
