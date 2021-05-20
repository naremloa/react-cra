import { Route, Switch, NavLink } from 'react-router-dom';
// import { css, useTheme } from '@emotion/react';
// import styled from '@emotion/styled';
// import Playground from '@/views/Playground';
import PageRedux from '@/views/PageRedux';
import logo from './assets/logo.svg';

// const appStyle = css`
//   display: flex;
//   height: 100%;
//   width: 100%;
// `;

// const appHeaderStyle = css`
//   width: 100%;
//   height: 100%auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: 1rem;
//   color: black;
// `;

// const playgroundStyle = css`
//   background-color: #475e8d;
//   height: 100%;
//   width: 200%;
//   padding: 10px;
// `;

function App() {
  // const theme = useTheme();
  // const ChildText = styled.div`
  //   color: ${theme.color.secondary};
  // `;
  // const ParentText = styled.div`
  //   ${ChildText} {
  //     color: ${theme.color.primary};
  //   }
  // `;
  return (
    <div
      className="App"
      css="111"
      demo="aaa"
      style={{
        color: 'white',
        textAlign: 'center',
      }}>
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
      <div>
        <Switch>
          <Route path="/redux">
            <PageRedux />
          </Route>
          <Route path="/">
            <div>Hello Wolrd</div>
            {/* <ParentText>
              <ChildText>HEHEHEHEHEH</ChildText>
            </ParentText>
            <ChildText>HOHOHOHOHOHO</ChildText> */}
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
