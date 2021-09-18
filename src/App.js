import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Blogs, Navbar, Footer } from "./components";
import Home from "./pages/home/home";
import NotFound from "./pages/notFound/notFound.js";
import Register from "./pages/register/register.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/blogs/:title" component={Blogs} />
          <Route exact component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
