import Navg from "./Nav";
import Header from "./Header";
import Section from "./Section";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Footer";
import { useState } from "react";

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="App">
      <Navg cartCount={cartCount} setCartCount={setCartCount} />
      <Header cartCount={cartCount} />
      <Section cartCount={cartCount} setCartCount={setCartCount} />
      <Footer />
    </div>
  );
}
