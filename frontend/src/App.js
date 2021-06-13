import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

// Components
import NavBar from "./components/NavBar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <NavBar />
      <SideDrawer show={sideToggle} />
      <Backdrop show={sideToggle} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
