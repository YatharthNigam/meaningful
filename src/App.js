import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions.jsx";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");

  const getApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      // console.log(data);
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //to call the getAp
    getApi();
  }, [word, category]);

  console.log(meanings);

  return (
    <div className="App">
      <Container maxWidth="md">
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        ></Header>
        {meanings && (
          <Definitions
            word={word}
            meanings={meanings}
            category={category}
          ></Definitions>
        )}
      </Container>
    </div>
  );
}

export default App;
