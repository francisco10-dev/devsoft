import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Technologies from "./components/Technologies";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        {/**   <Testimonials /> */}
        <Technologies />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
