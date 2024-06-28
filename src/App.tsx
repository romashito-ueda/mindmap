import React from 'react';
import logo from './stories/assets/logo.svg';
import './App.css';
import { Button } from './component/butotn/Button';
import NewsList from './component/newsList/NewsList';

function App() {
	const onClick = () => {
		window.open("https://reactjs.org", "_blank", "noopener,noreferrer");
	}

  return (
    <div className="App">
			<NewsList />
    </div>
  );
}

export default App;
