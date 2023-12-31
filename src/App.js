import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import { UserProvider } from "./contexts/UserContext";
import { Helmet } from 'react-helmet';
import Header from "./components/common/Header";
import Menu from "./components/home/Menu";
import Footer from "./components/common/Footer";
import NavigationBar from "./components/common/NavigationBar";
import ReusableModal from "./components/modals/ReusableModal";
import BookingWrapper from "./components/booking/BookingWrapper";
import Confirmation from "./components/confirmation/Confirmation";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("login"); // 'login' or 'signup'

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Helmet>
        {/* Meta tags */}
        <meta name="description" content="Pho Delight" />
        <meta name="keywords" content="React, Pho Delight, App" />
        
        {/* Open Graph Protocol Tags */}
        <meta property="og:title" content="Pho Delight" />
        <meta property="og:description" content="Authentic Vietnamese Restaurant" />
        <meta property="og:type" content="website" />
      </Helmet>
      <UserProvider>
        <Router>
          {/* These components are now outside of Routes and will always render */}
          {showModal && <ReusableModal onClose={closeModal} type={modalType} setType={setModalType} />}
          <NavigationBar onLoginClick={() => setShowModal(true)} />
          <Header showModal={() => setShowModal(true)} />

          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/booking" element={<BookingWrapper showModal={() => setShowModal(true)} />}  />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>

          <Footer />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
