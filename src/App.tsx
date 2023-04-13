import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./App.css";
import { Reports } from "./pages";
import { MainLayout } from "./layouts";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Reports />
      </MainLayout>
    </div>
  );
}

export default App;
