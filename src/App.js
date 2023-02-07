import logo from './IMG_9420.png';
import './App.css';

function App() {
  return (
    <>
      <div>
        <button class="buttons">
        Duplicate</button><button id="changeBackground" class="buttons">Change Background Color</button><button id="changeTitle" class="buttons">Change Title</button><button id="delete" class="buttons">Delete Last Instance</button><div class="card" id="basecard">
        <h2 id="title" class="header">
          Bryce Schneider
        </h2>
        <img src={logo} className="image" alt="logo" />
        <p class="paragraph">
          This image depicts a strapping young Penn State student reacting to an insane moment in his favorite class: IST 256. He can not believe what he is seeing!
        </p>
        <button class="button" id="details">
          Details
        </button>
      </div>
  </>  
  
  );
}

export default App;
