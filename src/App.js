import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import home from "./pages/home/home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
