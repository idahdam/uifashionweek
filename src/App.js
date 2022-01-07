import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Blogs, Navbar, Footer } from "./components";
import Home from "./pages/home/home";
import NotFound from "./pages/notFound/notFound.js";
import Register from "./pages/register/register.js";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/register" component={Register} /> */}
          <Route exact path="/register" component={Home} />
          <Route exact path="/blogs/:id" component={Blogs} />
          <Route exact component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
