import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import GameCard from "./components/GameCard"
function App() {
  return (
    <div className="App" style = {{display: "flex",
        alignItems: "center"}}>

        <div className="container-fluid" >
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <GameCard/>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    </div>
  );
}

export default App;
