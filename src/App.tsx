import React from "react";
import Main from "./views/Main";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { muiTheme } from "theme/muiTheme";
const App: React.FC = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
};

export default App;
