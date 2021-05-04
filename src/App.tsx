import logo from './assets/logo.svg';
// import Playground from '@/views/Playground';
import PageRedux from '@/views/PageRedux';

const appStyle = {
  height: '100%',
  width: '100%',
}

const playgroundStyle = {
  backgroundColor: '#475e8d',
  height: '100%',
  width: '200%',
  padding: '10px',
}

function App() {
  return (
    <div className="App" style={appStyle}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>learn react</div>
      </header>
      <div style={playgroundStyle}>
        {/* <Playground /> */}
        <PageRedux />
      </div>
    </div>
  );
}

export default App;
