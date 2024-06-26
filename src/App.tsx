import React from 'react';
import logo from './stories/assets/logo.svg';
import './App.css';
import { Button } from './component/butotn/Button';

function App() {
	const onClick = () => {
		window.open("https://reactjs.org", "_blank", "noopener,noreferrer");
	}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
				<Button label={'Learn React'} primary onClick={onClick}/>
      </header>
    </div>
  );
}

export default App;
