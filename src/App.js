import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';

function App() {
  
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    // since we dont want the alert msg to be stuck there so use set time out method
    setTimeout(() => {
      setAlert(null);
    }, 1800)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled", "success");
    }
    document.body.style.transition = "all 0.8s ease-in-out";
  }

  return (
    <>
      <Navbar title="TextUtils" toggleMode={toggleMode} aboutText="About TextUtils" mode={mode} />
      <Alert alert={alert} />
      <div className="container my-3">
          <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
          {/* <About /> */}
      </div>
    </>
  );
}

export default App;
