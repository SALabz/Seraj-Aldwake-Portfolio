import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer";
import Cover from "./components/Cover";

const App = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <BrowserRouter>
      {/* Gradient: black (starry) to dark grey to slightly lighter grey */}
      <div className="relative z-0 min-h-screen bg-gradient-to-b from-black via-[#1f1f1f] to-[#3f3f3f] text-white">
        <AnimatePresence mode="wait">
          {isRevealed ? (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <StarsCanvas />
              <div className="bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <Feedbacks />
              <div className="relative z-0">
                <Contact />
                <Footer />
              </div>
            </motion.div>
          ) : (
            <Cover key="cover" onReveal={() => setIsRevealed(true)} />
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
};

export default App;