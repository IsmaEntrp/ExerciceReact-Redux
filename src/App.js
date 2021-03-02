
import './App.css';
import { createStore } from "redux";
import reducer from "./Redux/reducer_state";
import ConnectedListElements from './Composants/ConnectedListElements ';
import ButtonAdd from './Composants/ButtonAdd'



function App() {

  const store = createStore(reducer);
        //Elements de la liste initiale
        var elems = [
           "Element1",
           "Element2",
           "Element3",
           "Element4",
           "Element5"
       ];

  return (
    <div className="App">
           <div>
               <ButtonAdd text="Ajouter" store={store}></ButtonAdd>
               <ConnectedListElements elems={elems} store={store} />
           </div>
    </div>
  );
}

export default App;
