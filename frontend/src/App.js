import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen";
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container></Container>
        <HomeScreen />
      </main>
      <Footer />
    </>
  );
};

export default App;
