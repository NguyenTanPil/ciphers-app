import './index.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ceasar from './feature/ceasar';
import Affine from './feature/affine';
import Reverse from './feature/reverse';
import Transposition from './feature/transposition';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Ceasar} />
          <Route path="/affine" component={Affine} />
          <Route path="/reverse" component={Reverse} />
          <Route path="/transposition" component={Transposition} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
