import './index.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ceasar from './feature/ceasar';
import Affine from './feature/affine';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Ceasar} />
          <Route path="/affine" component={Affine} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
