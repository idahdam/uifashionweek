import React from "react";
import {
  AboutContainer,
  AboutSectionHeader,
  AboutHeader,
  ElipsBG1,
  ElipsBG2,
  AboutSection,
  AboutSectionPart,
  AboutSectionPartHalf,
  AboutContent,
  AboutImage1,
} from "./about.element";
import image_test from "../../../assets/image/about/img_tester.jpg";
const about = () => {
  return (
    <>
      <AboutContainer>
        <AboutContent>
          <AboutSectionHeader>
            <AboutHeader>About Us</AboutHeader>
          </AboutSectionHeader>
          <AboutSection>
            <AboutSectionPart>
              <AboutSectionPartHalf>
                <AboutImage1 src={image_test} alt="vision" loading="Lazy"/>
              </AboutSectionPartHalf>
              <AboutSectionPartHalf>
                ini section pertama part 1_2
              </AboutSectionPartHalf>
            </AboutSectionPart>
            <AboutSectionPart>
              <AboutSectionPartHalf>
                ini section pertama part 2
              </AboutSectionPartHalf>
              <AboutSectionPartHalf>
                ini section pertama part 2_2
              </AboutSectionPartHalf>
            </AboutSectionPart>
          </AboutSection>
          <AboutSection>ini section kedua</AboutSection>
          <AboutSection>ini section ketiga</AboutSection>
        </AboutContent>
      </AboutContainer>
    </>
  );
};

export default about;
