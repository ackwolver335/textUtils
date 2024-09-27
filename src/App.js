import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";

// Importing the required routes and route from React-Router
import {
  Routes,
  Route
} from 'react-router-dom';

function App() {

  // using useState here for applying dark mode to different ones
  const [mode,setMode] = useState('light');

  // defining a word part for changing the word state regarding enable and disable
  const [describe,setDescribe] = useState('Enable');

  // Creating a state regarding different alerts
  const [alert,setAlert] = useState(null);

  // defining a method for getting alerts
  const manageAlert = (message,type) => {
    setAlert({
      msg : message,
      t1 : type
    })

    setTimeout(() => {
      setAlert(null);
    },1500);
  }
 
  // defining the method for changing the mode on getting the switch toggle
  const enableMode = () => {
    document.body.style.transition = "0.5s";
    if(mode === 'light'){
      setMode('dark');
      setDescribe('Disable');

      // setting the body background here
      document.body.style.backgroundColor = '#2b3035de';
      document.title = 'TextUtils - Dark Mode';

      // Providing Alert Message for Dark Mode
      manageAlert("Dark Mode is been Enabled","success");
    } else {
      setMode('light');
      setDescribe('Enable');

      // setting up the mode back to light one
      document.body.style.backgroundColor = 'white';
      document.title = "TextUtils - Light Mode";

      // Providing Alert Message for Disable of Dark Mode
      manageAlert("Dark Mode is been Disabled","success");
    }

    // Setting a timeout for reversing this after 1.5 seconds
    setTimeout(() => {
      document.title = "TextUtils";
    },1500);
  }

  return (
    <>
      {/* Getting the Navbar here for Main Project Utilities */}
      {/* All the other things are done with the help of Bootstrap */}

      {/* Adding the Components One by One here */}
      {/* Adding the title of the page using props here */}

      {/* On Removing both the passed values or attribute here we would get an error because of default props */}
      <Navbar title = "TextUtils" homeVal = "GotoHome" mode = {mode} toggleMode = {enableMode} describe = {describe}/>
      <Alert alert = {alert}/>
      <div className="container mt-4">

        <Routes>
          <Route path = '/' element = {<Textform mode = {mode} giveAlert = {manageAlert}/>} />
          <Route path = '/about' element = {<About mode = {mode} />} />
        </Routes>

        {/* <Textform mode = {mode} giveAlert = {manageAlert}/>
        <About /> */}
      </div>

      {/* trial of using Default props here */}
      {/* <Navbar /> */}
    </>
  );
}

export default App;
