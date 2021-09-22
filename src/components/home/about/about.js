import React from "react";
import {
  AboutContainer,
  AboutSectionHeader,
  AboutHeader,
  AboutSection,
  AboutSectionPart,
  AboutSectionPartHalf,
  AboutContent,
  AboutImage1Container,
  AboutSectionPartHalfHeader,
  AboutSectionPartHalfText,
  AboutSectionPartColumn,
  AboutContainerBg,
} from "./about.element";
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
                    <img src={image_about1} alt="uifw" />
                  </AboutImage1Container>
                </AboutSectionPartHalf>
                <AboutSectionPartHalf>
                  <AboutSectionPartColumn>
                    <AboutSectionPartHalfHeader>
                      UI Fashion Week History
                    </AboutSectionPartHalfHeader>
                    <AboutSectionPartHalfText>
                      Klub Mode UI, as the image of what fashion is in
                      Universitas Indonesia, was founded in February 2018. UI
                      Fashion Week as one of the program of Klub Mode UI
                      presents as a place of expression for Universitas
                      Indonesia students who have an interest and passion in
                      fashion since 2012 throughout series of events like
                      runway.
                    </AboutSectionPartHalfText>
                  </AboutSectionPartColumn>
                </AboutSectionPartHalf>
              </AboutSectionPart>
              <AboutSectionPart>
                <AboutSectionPartHalf>
                  <AboutSectionPartColumn>
                    <AboutSectionPartHalfHeader>
                      About UI Fashion Week
                    </AboutSectionPartHalfHeader>
                    <AboutSectionPartHalfText>
                      UI Fashion Week has a wide range of different people
                      participated in such as models, fashion companies,
                      influencers, designers, etc. Becaming hot topic in fashion
                      industry from year to year, UI Fashion Week has been
                      presenting several different themes that could bring a
                      huge impact and awareness related to fashion.
                    </AboutSectionPartHalfText>
                  </AboutSectionPartColumn>
                </AboutSectionPartHalf>
                <AboutSectionPartHalf>
                  <AboutImage1Container>
                    {/* <AboutImage2 src={image_test} alt="vision" loading="Lazy" /> */}
                    <img src={image_about2} alt="uifw" />
                  </AboutImage1Container>
                </AboutSectionPartHalf>
              </AboutSectionPart>
            </AboutSection>
            <AboutSection>
              <img src={image_2} alt="uifw" />
            </AboutSection>
            <AboutSection>
              <img src={image_3} alt="uifw" />
            </AboutSection>
          </AboutContent>
        </AboutContainer>
      </AboutContainerBg>
    </>
  );
};

export default about;
