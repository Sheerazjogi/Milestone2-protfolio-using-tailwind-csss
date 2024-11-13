"use client"; // This is a client component
import Header from "./components/header";
import HomeSection from "./components/home";
import About from "./components/about";
import Education from "./components/education";
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      <Header/>
      <HomeSection/>
      <About/>
      <Education/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>

    


    

    </>

  );
}
