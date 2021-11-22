import axios from "axios";
import "./App.css";
import { useEffect } from "react";

function App() {
  const getApi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //to call the getAp
    getApi();
  }, []);

  return <div className="App">Hello World</div>;
}

export default App;
