import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:title" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
