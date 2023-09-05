import React from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
