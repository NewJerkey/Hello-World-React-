import logo from './IMG_9420.png';
import './App.css';

function App() {
  return (
    <><div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div><button class="buttons">
        Duplicate</button><button id="changeBackground" class="buttons">Change Background Color</button><button id="changeTitle" class="buttons">Change Title</button><button id="delete" class="buttons">Delete Last Instance</button><div class="card" id="basecard">
        <h2 id="title" class="header">
          Bryce Schneider
        </h2>
        <img src={logo} class="image" alt="Bryce Schneider" />
        <p class="paragraph">
          This image depicts a strapping young Penn State student reacting to an insane moment in his favorite class: IST 256. He can not believe what he is seeing!
        </p>
        <button class="button" id="details">
          Details
        </button>
      </div></>  
  
  );
}

export default App;
