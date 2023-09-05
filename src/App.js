import React, { useState } from "react";
import "./App.css";
import { UserProvider } from "./contexts/UserContext";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
// import LoginModal from "./components/modals/Login";
import ReusableModal from "./components/modals/ReusableModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("login"); // 'login' or 'signup'

  const openModal = (type) => {
    setShowModal(true);
    setModalType(type);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <UserProvider>
        {showModal && ( <ReusableModal onClose={closeModal} type={modalType} setType={setModalType} /> )}
        <NavigationBar onLoginClick={() => setShowModal(true)} />
        <Header />
        <Menu />
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
