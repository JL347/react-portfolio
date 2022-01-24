import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ThemeProvider } from 'next-themes'

export default function App() {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={false}>
        <main className="text-gray-400 bg-gray-900 body-font">
          <Navbar />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </ThemeProvider>
    </>
  );
}