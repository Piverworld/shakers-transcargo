import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Mission from "./components/sections/Mission";
import References from "./components/sections/Reference";
import Services from "./components/sections/Services";
import Team from "./components/sections/Team";


function App() {
  return (
    <div className="font-dm-sans">
      <Header />
      <main className="pt-16 max-w-[1280px]">
        <Hero />
        <Services />
        <Mission />
        <Team />
        <References />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
