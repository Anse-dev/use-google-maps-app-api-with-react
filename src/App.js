import React from "react";
import ContactSection from "./components/ContactSection";
import DisclaimerSection from "./components/DisclaimerSection";
import FooterSection from "./components/FooterSection";
import IntroSection from "./components/IntroSection";
import Map from "./components/Map";
import "./index.css";

function App() {
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />
      <Map />
      <DisclaimerSection />
      <FooterSection />
    </div>
  );
}

export default App;
