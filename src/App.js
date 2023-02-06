import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './Component/Navbar/NavBar';
import HeroSection from './Component/HeroSection/HeroSection';
import About from './Component/About/About';
import Skilles from './Component/Skills/Skilles';
import Projects from './Component/Projucts/Projects';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import {Helmet,HelmetProvider} from "react-helmet-async"
function App() {
  return (
<>
<HelmetProvider>

<Helmet>
  <meta>
  
  </meta>
  <title>
    portfolio webside of salaman ilyas
  </title>
</Helmet>
<NavBar/>
<HeroSection/>
<About/>
<Skilles/>
<Projects/>
<Contact/>
<Footer/>
</HelmetProvider>

</>
  );
}

export default App;
