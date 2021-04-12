import Home from "./Components/Home";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Email from "./Components/Email";
import Reset from "./Components/Reset";
import Home1 from "./Components/Home1";
import Edit from "./Components/Edit";

function App() {

  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/signup" exact={true}>
            <Signup />
          </Route>
          <Route path="/login" exact={true}>
            <Login />
          </Route>
          <Route path="/email" exact={true}>
            <Email />
          </Route>
          <Route path="/reset" exact={true}>
            <Reset />
          </Route>
          <Route path="/home1" exact={true}>
            <Home1 />
          </Route>
          <Route path="/edit/:id" exact={true}>
            <Edit />
          </Route>
        </Switch>
      </BrowserRouter>
  )
}

export default App;
