import logo from './logo.svg';
import './App.css';
import './styles/index.less';
import Playground from '@/Playground';

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
