import ItemListContainer from "./components/ItemListContainer";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting="Stylish Feet"></ItemListContainer>
    </>
  );
}

export default App;
