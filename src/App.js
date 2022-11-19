import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './Component/Navbar/NavBar';
import HeroSection from './Component/HeroSection/HeroSection';
import About from './Component/About/About';
import Skilles from './Component/Skills/Skilles';
import Projects from './Component/Projucts/Projects';

function App() {
  return (
<>
<NavBar/>
<HeroSection/>
<About/>
<Skilles/>
<Projects/>
</>
  );
}

export default App;
