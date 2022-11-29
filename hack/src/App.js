import React  from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Main from './pages/Main';
import Registratiom from "./pages/Registratiom";
import Authorization from "./pages/Authorization";
import Main2 from "./pages/Main2";


function App() {
  return (<div className='theme'>

      <Switch>
          <Route exact path="/">
              <Authorization/>
          </Route>
          <Route  path="/main">
              <Main/>
          </Route>
          <Route  path="/reg">

              <Registratiom/>
          </Route>
          <Route  path="/main2">

              <Main2/>
          </Route>

      </Switch>
      </div>
  );
}

export default App;
