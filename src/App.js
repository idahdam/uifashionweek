import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Blogs, Navbar, Footer,Register} from "./components";
import home from "./pages/home/home";
import notFound from "./pages/notFound/notFound.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/register" compnent={Register} />
          <Route exact path="/blogs/:title" component={Blogs} />
          <Route exact component={notFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
