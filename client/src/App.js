import './index.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ceasar from './feature/ceasar';
import Affine from './feature/affine';
import Reverse from './feature/reverse';
import Transposition from './feature/transposition';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/components/Theme/ThemeCustome';
import { useState } from 'react';

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
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
