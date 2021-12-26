import { createTheme, MenuItem, TextField, ThemeProvider } from "@mui/material";
import { amber, blue } from "@mui/material/colors";
import React from "react";
import "./Header.css";
import categories from "../../data/category";

const Header = ({ category, setCategory, word, setWord, LightMode }) => {
  const darkTheme = createTheme({
    palette: {
      mode: LightMode ? "light" : "dark",
      primary: LightMode ? blue : amber,
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <div className="header">
      <span className="title">{word === "" ? "Meaningful" : word}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Enter Word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />{" "}
          <TextField
            className="select"
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            helperText="Please select your language"
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
