import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedDestinations from "./components/FeaturedDestinations";
import HeritageBanner from "./components/HeritageBanner ";
import WildeLife from "./components/WildeLife";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedDestinations />
      <HeritageBanner />
      <WildeLife />
    </div>
  );
}

export default App;