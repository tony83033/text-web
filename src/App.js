import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform  from './components/Textform';
import About  from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState('light');

  const changemode = ()=>{


    if(mode==='light'){
      setmode("dark");
      document.body.style.backgroundColor="#042743";
      showalert("Dark mode has being enable","success");
    }else{
      setmode('light');
      document.body.style.backgroundColor = "white";
      showalert("Light has being enable","success");
    }
     
  }

  const [alert, setalert] = useState(null);

  const showalert=(message,type)=>{
      setalert({
        msg:message,
        type:type
      })
     setTimeout(() => {
       setalert(null);
     }, 2000);

      
  }


  return (
  
    <>
 
      <Navbar title="Sumit" about="AboutUs" mode={mode} changemode={changemode}/>
      <Alert alert={alert}/>

     

     
          
         
          <Textform heading="Enter text below to convers in UPPERCASE" button="change into upercase" mode={mode} showalert={showalert}/>
            
          
     
         
 {/* <About/> */}
         
         
     
     
      
     
      
    </>
    
  );
}

export default App;
