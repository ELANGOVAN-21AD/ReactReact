import './App.css';
import './globals.css';
import Routerr from './Routes';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Strang from './StrangerTalks';

function App() {

const [show,setShow]=useState(false)
function handleShow(){
  setShow(!show)
}
  
  return (
    <body className='b'>





    <h1>Pages made with React</h1>

    
    
    <div class="divvvv" >
      <button onClick={handleShow}>Chat</button>
    <Link to="/loading">Loading Screen</Link>
    <Link to="/raimg">Random-Img Generator</Link>
    </div>
    {show && <div><button onClick={handleShow}>Close chat</button><Strang/></div>}
    <Routerr/>
</body>

  );
}

export default App;