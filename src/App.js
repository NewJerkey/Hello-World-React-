import logo from './IMG_9420.png';
import './App.css';

function App() {
  return (
    <><div className="App">

    </div>
      <div class="buttons">
        <button class="copy">Duplicate</button>
        <button class="changeBackground">Change Background</button>
        <button class="changeTitle">Change Title</button>
        <button id="delete">Delete
          Last Instance</button>
      </div>
      <div class="card">
        <h2 class="header">
          Bryce Schneider
        </h2>
        <img src={logo} class="image" alt="Bryce Schneider" />
        <p class="paragraph">
          This image depicts a strapping young Penn State student reacting to an insane moment in his favorite class: IST 256. He can not believe what he is seeing!
        </p>
        <button class="details">
          Details
        </button>
      </div>

    </>

  );
}

export default App;
