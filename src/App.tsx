import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Knowledgebase from "./components/Knowledgebase";
import WhyChooseUs from "./components/WhyChooseUs";
import GetQuote from "./components/GetQuote";
import Footer from "./components/Footer";
import OurStrengths from "./components/OurStrengths";

function App() {
  return (
    <div className="font-dm-sans">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Knowledgebase />
        <OurStrengths />
        <WhyChooseUs />
        <GetQuote />
      </main>
      <Footer />
    </div>
  );
}

export default App;
