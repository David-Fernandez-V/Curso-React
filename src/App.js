import portada from "./img/rick-morty.png"
import './App.css';

function App() {
  const repApi = () =>{
    console.log("Hola")
  };

  return (
    <div className="App">
      <header className="App-header">
       <h1 className="title">Rick & Morty</h1>
       <img src={portada} alt="Rick & Morty" className='img-home'/>
       <button onClick={repApi} className="btn-search"> Buscar personaje </button>
      </header>
    </div>
  );
}

export default App;
