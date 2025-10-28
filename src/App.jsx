
import {ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/Coctails.js";
import About from "./components/About.js";
import Art from "./components/Art.jsx";
import Menu from "./components/Menu.jsx";
import Contact from "./components/Contact.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {

    return (
     <main>
         <Navbar />
         <Hero />
         <Cocktails />
         <About />
         <Art />
         <Menu />
         <Contact />
     </main>
    )
}
export default App;