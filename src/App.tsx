import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

// Setar a margem e o padding pra 0
// Por que as vezes tem muitos elementos com
// Padding e border padrão.
const Wrapper = createGlobalStyle`
  body, html {
    font-family: Poppins, sans-serrif;
    min-height: 100vh;
  }

  .App, #root {
    min-height: 100vh;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <Router>
      <div className="App">
        <Wrapper />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
