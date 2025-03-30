import Feature from "./sections/Feature";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Platform from "./sections/Platform";
import Stats from "./sections/Stats";
import Tutorial from "./sections/Tutorial";

function App() {
  return (
    <div className="font-poppins">
      <Header />
      <Hero />
      <Feature />
      <Tutorial />
      <Stats />
      <Platform />
    </div>
  );
}

export default App;
