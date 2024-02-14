import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Nav />
      <Profile />
      <About />
      <Experiance />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
