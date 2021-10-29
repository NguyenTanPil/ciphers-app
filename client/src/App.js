import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../src/components/Theme/ThemeCustome';
import Header from './components/Header';
import Affine from './feature/affine';
import Ceasar from './feature/ceasar';
import Reverse from './feature/reverse';
import Modulo from './feature/modulo';
import ModularInverse from './feature/modularInverse';
import Transposition from './feature/transposition';
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="App">
        <Router>
          <Header theme={theme} setTheme={setTheme} />
          <Switch>
            <Route exact path="/" component={Ceasar} />
            <Route path="/affine" component={Affine} />
            <Route path="/reverse" component={Reverse} />
            <Route path="/transposition" component={Transposition} />
            <Route path="/modulo" component={Modulo} />
            <Route path="/modular-inverse" component={ModularInverse} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
