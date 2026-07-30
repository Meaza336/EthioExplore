import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedDestinations from "./components/FeaturedDestinations";
import HeritageBanner from "./components/HeritageBanner ";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedDestinations />
      <HeritageBanner />
    </div>
  );
}

export default App;