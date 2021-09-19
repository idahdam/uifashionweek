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
  AboutImage1Container,
  AboutImage2,
  AboutImage2Container,
  AboutSectionPartHalfHeader,
  AboutSectionPartHalfText,
  AboutSectionPartColumn,
  AboutContainerBg,
} from "./about.element";
import image_test from "../../../assets/image/landing-page/LandingPage-bg.png";
import image_2 from "../../../assets/image/about/Lookbook 1.png";
import image_3 from "../../../assets/image/about/Lookbook 2.png";
import image_about1 from "../../../assets/image/about/About Us Photo 1.png";
import image_about2 from "../../../assets/image/about/About Us Photo 2.png";

const about = () => {
  return (
    <>
      <AboutContainerBg>
        <AboutContainer>
          <AboutContent>
            <AboutSectionHeader>
              <AboutHeader>About Us</AboutHeader>
            </AboutSectionHeader>
            <AboutSection>
              <AboutSectionPart>
                <AboutSectionPartHalf>
                  <AboutImage1Container>
                    {/* <AboutImage1 src={image_test} alt="vision" loading="Lazy" /> */}
                    <img src={image_about1} />
                  </AboutImage1Container>
                </AboutSectionPartHalf>
                <AboutSectionPartHalf>
                  <AboutSectionPartColumn>
                    <AboutSectionPartHalfHeader>
                      Lorem ipsum dolor sit amet, consectetur adipiscing eli
                    </AboutSectionPartHalfHeader>
                    <AboutSectionPartHalfText>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea ommodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum."
                    </AboutSectionPartHalfText>
                  </AboutSectionPartColumn>
                </AboutSectionPartHalf>
              </AboutSectionPart>
              <AboutSectionPart>
                <AboutSectionPartHalf>
                  <AboutSectionPartColumn>
                    <AboutSectionPartHalfHeader>
                      Lorem ipsum dolor sit amet, consectetur adipiscing eli
                    </AboutSectionPartHalfHeader>
                    <AboutSectionPartHalfText>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea ommodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum."
                    </AboutSectionPartHalfText>
                  </AboutSectionPartColumn>
                </AboutSectionPartHalf>
                <AboutSectionPartHalf>
                  <AboutImage1Container>
                    {/* <AboutImage2 src={image_test} alt="vision" loading="Lazy" /> */}
                    <img src={image_about2} />
                  </AboutImage1Container>
                </AboutSectionPartHalf>
              </AboutSectionPart>
            </AboutSection>
            <AboutSection>
              <img src={image_2} />
            </AboutSection>
            <AboutSection>
              <img src={image_3} />
            </AboutSection>
          </AboutContent>
        </AboutContainer>
      </AboutContainerBg>
    </>
  );
};

export default about;
