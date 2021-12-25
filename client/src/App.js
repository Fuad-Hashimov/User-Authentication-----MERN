import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact/>
    </>
  );
}

export default App;
