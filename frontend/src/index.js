import "./custom.scss";
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store, history } from "./store";

import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </ConnectedRouter>
      </GlobalStyle>
    </ThemeProvider>
  </Provider>,

  document.getElementById("root")
);
