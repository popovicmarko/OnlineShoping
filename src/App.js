import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Ordering from "./pages/Ordering/Ordering";
import OnSale from "./pages/OnSale/OnSale"
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
      <Navbar />
      <main style={{ minHeight: "70vh" }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ordering" element={<Ordering />} />
          <Route path="/onsale" element={<OnSale />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
