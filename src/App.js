import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Header from "./components/Header/Header";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");

  const getApi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
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
  }, []);

  console.log(meanings);

  return (
    <div className="App">
      <Container maxWidth="md">
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord}></Header>
      </Container>
    </div>
  );
}

export default App;
