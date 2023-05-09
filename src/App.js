import "./App.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather search engine</h1>
        <Weather />
        <p>
          <a href="https://github.com/carolinesteen/weather-react">
            Open-source code
          </a>{" "}
          by Caroline Steen{" "}
        </p>
      </header>
    </div>
  );
}

export default App;
