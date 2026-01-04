import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import CustomOrders from "./components/CustomOrders";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState("en");
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      <Navbar lang={lang} setLang={setLang} dark={dark} setDark={setDark} />
      <Home lang={lang} />
      <Products />
      <CustomOrders lang={lang} />
      <About lang={lang} />
      <Contact lang={lang} />
      <Footer />
    </div>
  );
}
