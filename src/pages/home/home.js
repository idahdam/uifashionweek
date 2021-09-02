import React from "react";
import LandingPage from "../../components/home/landingPage/landingPage";
import About from "../../components/home/about/about";
import Blog from "../../components/home/blog/blog";
import Contact from "../../components/home/contact/contact";
import Sponsor from "../../components/home/sponsor/sponsor";

const home = () => {
  return (
    <>
      <LandingPage />
      <About />
      <Blog />
      <Contact />
      <Sponsor />
    </>
  );
};

export default home;
