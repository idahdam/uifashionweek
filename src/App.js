import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Blogs, Navbar, Footer} from "./components";
import home from "./pages/home/home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/blogs/:title" component={Blogs} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
