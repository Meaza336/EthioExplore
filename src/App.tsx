import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedDestinations from "./components/FeaturedDestinations";
import HeritageBanner from "./components/HeritageBanner ";
import WildeLife from "./components/WildeLife";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedDestinations />
      <HeritageBanner />
      <WildeLife />
      <Footer />
    </div>
  );
}

export default App;