import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { MainLayout } from "./layouts";
import { Reports } from "./pages";

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
