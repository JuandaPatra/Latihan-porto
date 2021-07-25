import React,{useState} from "react"
import Topbar from "./component/Topbar/topbar";
import Contact from "./component/contact/contact";
import Testimonial from "./component/testimonials/testimonials";
import Works from "./component/works/works"
import Portfolio from "./component/portfolio/portfolio"
import Intro from "./component/intro/intro"
import Menu from "./component/menu/menu";
import "./app.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [menuOpen, setMenuOpen]= useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="section">
      <Intro/>
      <Testimonial/>
      <Portfolio/>
      <Contact/>
      <Works/>

      </div>


    </div>
  );
}

export default App;
