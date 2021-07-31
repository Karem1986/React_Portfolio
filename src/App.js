import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom"; //gives a website for each web page
import Homepage from "./pages/Homepage/index"
import Projects from "./components/Projects"
import AboutPage from "./pages/About/index"
import Game from "./pages/funGame/index"

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
      <Switch>
      <Route path="/game" component={Game} />
      <Route path="/about" component={AboutPage} />
      <Route path="/projects" component={Projects} />
      <Route path="/" exact component={Homepage}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
