import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../src/components/Theme/ThemeCustome';
import Footer from './components/Footer';
import Header from './components/Header';
import Affine from './feature/affine';
import Base64 from './feature/base64';
import Ceasar from './feature/ceasar';
import Hill from './feature/hill';
import ModularInverse from './feature/modularInverse';
import Modulo from './feature/modulo';
import Multiplicative from './feature/multiplicative';
import Reverse from './feature/reverse';
import Rot13 from './feature/rot13';
import SimpleSubstitution from './feature/simpleSubstitution';
import Transposition from './feature/transposition';
import Vigenere from './feature/vigenere';
import XOR from './feature/xor';
import DES from './feature/des';
import ElGamal from './feature/elgamal';
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
            <Route path="/simple-substitution" component={SimpleSubstitution} />
            <Route path="/vigenere" component={Vigenere} />
            <Route path="/hill" component={Hill} />
            <Route path="/rot13" component={Rot13} />
            <Route path="/base64" component={Base64} />
            <Route path="/xor" component={XOR} />
            <Route path="/multiplicative" component={Multiplicative} />
            <Route path="/des" component={DES} />
            <Route path="/elgamal" component={ElGamal} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
