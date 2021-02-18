import React from 'react'
import Header from './components/Header';
import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './components/Login';
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import Widgets from "./components/Widgets";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (<Login />) : (
        <>
       
          <div className="app__header">
            <Header />
          </div>

          <div className="app__body">
            <div className="app__bodySidebar">
              <Sidebar />
            </div>
            <div className="app__bodyFeed">
              <Feed />
            </div>

            <div className="app__bodyWidgets">
              <Widgets />
            </div>

          </div>
        </>
      )
      }
    </div>

  )
}

export default App;
