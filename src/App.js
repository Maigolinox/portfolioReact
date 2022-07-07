//import logo from './logo.svg';
import { useContext} from "react";
import './App.css';
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import Projects from "./components/projects/Projects";
const App=()=>{
  const theme=useContext(ThemeContext)
  const darkMode=theme.state.darkMode;
  return (
  <div style={{
    backgroundColor:darkMode ? "#222":"white",
    color:darkMode && "white"}}
  >
    <Intro/>
    <About/>
    <ProductList/>
    <Projects/>
    <Contact />
    <Toggle/>
  </div>
  )
}

export default App;
