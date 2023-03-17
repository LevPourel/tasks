import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
// @ts-ignore
function App() {
    const title:any = useSelector<any>(state => state?.title)
  return (
    <div className="App">
      <header className="App-header">
          <div>{title}</div>
      </header>
    </div>
  );
}

export default App;
