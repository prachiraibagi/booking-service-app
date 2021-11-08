import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Explore from "./pages/Explore"
import About from "./pages/About"
import Help from "./pages/Help"
import Stories from "./pages/Stories"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/explore' component={Explore} />
        <Route path='/about' component={About} />
        <Route path='/help' component={Help} />
        <Route path='/stories' component={Stories} />
      </Switch>
    </Router>
  );
}
  
export default App;