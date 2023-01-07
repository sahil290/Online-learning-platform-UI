import {useState} from "react";
import Blogs from "./Components/Blogs";
import Comments from "./Components/Comments";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Programs from "./Components/Programs";
import Services from "./Components/Services";
import TopSection from "./Components/TopSection";
import Tutors from "./Components/Tutors";

import "./Style/Main.css";
function App() {
  return (
    <>
      <Navbar />

      <TopSection />
      <Services />
      <Programs />
      <Tutors />
      <Comments />
      <Blogs />
      <Footer /> 
    </>
  );
}

export default App;
