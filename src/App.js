import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import store from './redux/store/index'
import { Provider } from 'react-redux'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0293ff'
    },
}});

function App() {
  return (
    <Provider store = {store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          {Routes.map((item,index) => {
            return  <Route key = {item.path+index} path={item.path} component={item.component}></Route>
          })}
        </Switch>
      </Router>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
