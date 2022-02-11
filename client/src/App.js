import "./App.css";

import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage";
import HeaderSection from "./components/header";
import LoginPage from "./pages/login-page";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
