import React from 'react';
import './App.css';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
     <Header />


      {/* Body */}
      <div className="app_body">
        <Sidebar />
        <Feed />

      </div>

         {/* Sider */}
         {/* Feed*/}
          {/* Widgets */}



    </div>
  );
}

export default App;
