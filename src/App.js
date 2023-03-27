import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        This is my first deploying web page on Render!
        </p>
        <p> Click the link below and see how is the wheather on the world. </p>
        <a
          className="App-link"
          href="https://wheatherapp-zzcn.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check The Wheather
        </a>
      </header>
    </div>
  );
}

export default App;
