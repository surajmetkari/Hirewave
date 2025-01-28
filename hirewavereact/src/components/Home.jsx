import React from "react";
import { Section1 } from "../components/Section1";
import { Section2 } from "../components/Section2";
import { Footer } from "../components/Footer";
import { NavBar } from "./NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
};

export default Home;
