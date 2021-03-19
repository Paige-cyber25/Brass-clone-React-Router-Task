import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage';
import WelcomePage from './components/WelcomePage';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      {/* <Section />
      <Footer /> */}
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/welcomepage" component={WelcomePage} />
      </Switch>
     </div>
    </Router>
  );
}

export default App;
