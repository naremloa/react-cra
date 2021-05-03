import logo from './assets/logo.svg';
import Playground from '@/views/Playground';

const appStyle = {
  height: '100%',
  width: '100%',
}

function App() {
  return (
    <div className="App" style={appStyle}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>learn react</div>
      </header>
      <Playground />
    </div>
  );
}

export default App;
