import "./App.css";
import GridView from "./components/GridView";
import ListView from "./components/ListView";
import TableView from "./components/TableView";

function App() {
  return (
    <div className="App">
      <h1>React Virtualized Table</h1>
      <div className="list-wrapper">
        <h3>List View</h3>
        <ListView />
      </div>
      <div className="grid-wrapper">
        <h3>Grid View</h3>
        <GridView />
      </div>

      <div className="table-wrapper">
        <h3>Table View</h3>
        <TableView />
      </div>
    </div>
  );
}

export default App;
