import React from "react";
import {
  AboutContainer,
  AboutSectionHeader,
  AboutHeader,
  ElipsBG1,
  ElipsBG2,
  AboutSection,
  AboutSectionPart,
} from "./about.element";
const about = () => {
  return (
    <>
      <AboutContainer>
        <AboutSectionHeader>
          <AboutHeader>About Us</AboutHeader>
        </AboutSectionHeader>
        <AboutSection>
          <AboutSectionPart>ini section pertama part 1</AboutSectionPart>
          <AboutSectionPart>ini section pertama part 2</AboutSectionPart>
        </AboutSection>
        <AboutSection>ini section kedua</AboutSection>
        <AboutSection>ini section ketiga</AboutSection>
      </AboutContainer>
    </>
  );
};

export default about;
