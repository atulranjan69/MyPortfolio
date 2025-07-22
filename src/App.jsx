
import React from 'react';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Skills from './components/skills/skills';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Work from './components/work/work';
import Education from './components/education/education';     
import BlurBlob from './BlurBlob';

const App = () => {
  return (
    <div className="bg-[#050414]">
      <BlurBlob position={{ top: "30%", left: "20%" }} size={{ width: "30%", height: "40%" }} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
