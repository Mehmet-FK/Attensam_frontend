import { useEffect, useState } from "react";
import "./App.css";
import DataTable from "./components/Table";
import Home from "./pages/Home";
import { useDataStore } from "./zustandStores/useDataStore";

function App() {
  const [state, setState] = useState();
  const dataFromAPI = useDataStore((state) => state.data);
  const isLoading = useDataStore((state) => state.isLoading);
  const getData = useDataStore((state) => state.getDataFromAPI);

  useEffect(() => {
    getData();
  }, []);

  return <>{isLoading ? <h1>LOADING...</h1> : <Home />}</>;
}

export default App;
