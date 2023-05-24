
import ItemsListsConteiner from "./component/ItemsListsConteiner.jsx";
import NavBar from "./component/NavBar.jsx";


function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
        <h1 style={{alignItems:"center",display:"flex" , justifyContent:"center"}}>Los Ramones Respuestos</h1>
     <ItemsListsConteiner greeting="hola soy un componente"/>

        </div>
  );
}

export default App;
