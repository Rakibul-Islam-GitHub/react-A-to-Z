import logos from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logos} className="App-logo" alt="logo" />
        
        <p>I am a react developer!</p>
        <Profile  name='Rakibul'></Profile>
        <Profile  name='Jhon' job='Data Scientist'></Profile>
      </header>
    </div>
  );
}

function Profile(props) {
  return (
    <div style={{border:'2px solid red', color:'pink', width:'350px', margin:'5px'}}>
      <p>Name : {props.name}</p>
      {/* in jsx if else doesnot work so used ternary operator */}
      {props.job !== undefined? <p>Job : {props.job}</p>: <p>Job : Software Dev</p> } 
        
    </div>
  );
}

export default App;
