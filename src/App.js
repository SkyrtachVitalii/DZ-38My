import './App.scss';
import AsideMenu from "./components/AsideMenu/AsideMenu";
import Autos from "./views/Autos/Autos";
import AutosItem from "./views/Autos/AutosItem";
import Basket from "./views/Basket/Basket"
import NotFound404 from "./views/NotFound404/NotFound404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
    <div className="App">
      <AsideMenu/>
      <div className="container">
        <Switch>
          <Route exact path="/Autos">
            <Autos/>
          </Route>
          <Route exact path="/Autos/:autoId">
            <AutosItem />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="*">
            <NotFound404 />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
