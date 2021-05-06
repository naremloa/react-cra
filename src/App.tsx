import { Route, Switch, NavLink } from 'react-router-dom';
// import Playground from '@/views/Playground';
import PageRedux from '@/views/PageRedux';
import logo from './assets/logo.svg';

const appStyle = {
  height: '100%',
  width: '100%',
};

const playgroundStyle = {
  backgroundColor: '#475e8d',
  height: '100%',
  width: '200%',
  padding: '10px',
};

function App() {
  return (
    <div className="App" style={appStyle}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>learn react</div>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/redux" activeClassName="active">
          redux
        </NavLink>
      </header>
      <div style={playgroundStyle}>
        <Switch>
          <Route path="/redux">
            <PageRedux />
          </Route>
          <Route path="/">
            <div>Hello Wolrd</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
