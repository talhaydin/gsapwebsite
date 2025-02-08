import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/*     <h1 className="text-5xl text-violet-300 font-bold">Welcome to GSAP</h1> */}
      <Hero></Hero>
      {/*       <section className="z-0 min-h-screen bg-blue-500"></section> */}
      <About></About>
    </main>
  );
};

export default App;
