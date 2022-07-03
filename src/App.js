import React from 'react';
import {
  BrowserRouter as Router,Switch,
  Route} from "react-router-dom";
import Header from './components/Header';
import Chat from "./components/Chat";
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./firebase"
import Login from "./components/Chat"



import './App.css';


function App() {

  const [user, loading] = useAuthState(auth);
  return (
    <div className="app">
      <Router>
        {/* {!user ? (
          <Login />
        ) : ( */}
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
display:flex;
height:100vh;
`;
