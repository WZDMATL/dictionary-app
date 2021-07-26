import logo from "./dictionaryapplogo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          Coded by&nbsp;
          <a
            href="https://github.com/WZDMATL/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            WZDM Management Agency
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
