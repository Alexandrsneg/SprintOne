import React from 'react';
import './App.css';
import Main from "./components/mainScreen/main";
import Navigate from "./components/mainScreen/navigate";



class App extends React.Component{
  render() {
    return (
        <div className="App">
            <Navigate/>
        </div>

    );
  }
}

export default App;
