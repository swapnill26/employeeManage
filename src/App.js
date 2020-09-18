import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

//Redux
import {Provider} from 'react-redux';
import store from './store';

//Component
import SignUpManager from './component/auth/SignUp';
import  Navbar  from './component/Navbar';
import Login from './component/auth/Login';
import Profile from './component/pages/Profile';


function App() {
  return (
    <Router>
      <Provider store={store}>
          <Navbar/>
          <Switch>      
            <Route exact path="/" component={Login}/>
            <Route exact path="/register" component={SignUpManager}/>
            <Route exact path='/profile' component={Profile}/>
          </Switch>
      </Provider>
    </Router>
  );
}

export default App;
