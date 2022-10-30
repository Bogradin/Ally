import react, {useState} from 'react';
import './App.css';
import Basic from './DadosPessoais';
import DestinoPais from './DestinoPais'
import 'bootstrap/dist/css/bootstrap.min.css'
import DestinoCidade from './DestinoCidade'

function App() {

  return (
    <div className="mainDiv">
      <div className="leftDiv">
        <Basic />
      </div>
      <div className="rightDiv">
        <DestinoPais />
        <DestinoCidade />
      </div>
    </div>
  );
}

export default App;
