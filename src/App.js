import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [myMode,setMyMode] = useState('light');
  const [text,setText] = useState('dark');
  const [btnColor,setBtnColor] = useState('primary')
  const [myAlert,setAlert] = useState('null')
  const toggleMode= ()=>{
    if(myMode==="light"){
      setMyMode("dark");
      setText('light');
      setBtnColor('success');
      toggleAlert("DarkMode has been enabled","success");
      document.body.style.backgroundColor = '#042743';
    }else{
      setMyMode("light");
      setText('dark');
      setBtnColor('primary');
      toggleAlert("LightMode has been enabled","success");
      document.body.style.backgroundColor = 'white';
    }
  }
  const toggleAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  return (
    <>
    <Router>
    <Navbar mode={myMode} toggleMode={toggleMode} text={text}/>
    <Alert alert={myAlert}/>
    <div className="container my-4">
    <Routes>
      <Route exact path="/about" element={<About heading="About Us" mode={myMode}/>}/>
      <Route exact path="/" element={<TextArea heading="Enter the text to analyze" mode={myMode} btnColor={btnColor} toggleAlert={toggleAlert}/>}/>
    </Routes>
    </div>
    </Router> 
    </>
  );
}

export default App;
