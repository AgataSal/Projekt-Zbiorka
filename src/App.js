import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register";
import "./scss/main.scss"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/register" >
            <Register/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
