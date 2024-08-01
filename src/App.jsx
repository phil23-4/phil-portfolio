import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import Header from "./components/nav/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/nav/footer";
import About from "./components/about";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
