import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Programming from "./pages/Programming";
import Covid19 from "./pages/Covid19";
import Indonesia from "./pages/Indonesia";
import Search from "./pages/Search";
import Saved from "./pages/Saved"
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="app_container">
      <Header />
      <Routes>
        <Route path="/" element={<Indonesia />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/covid19" element={<Covid19 />} />
        <Route path="/search/:keyword" element={<Search />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
