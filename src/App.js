import React from 'react';
import './App.css';
import Main from "./components/mainScreen/main";
import Authorization from "./components/registrationScreens/authScreen";




class App extends React.Component{
  render() {
    return (
        <div className="App">
            <Main/>
        </div>

    );
  }
}

export default App;
