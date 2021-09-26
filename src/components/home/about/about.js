import React from "react";
import {
  AboutContainer,
  AboutSectionHeader,
  AboutHeader,
  AboutSection,
  AboutSectionPart,
  AboutSectionPart2,
  AboutSectionPartHalf,
  AboutContent,
  AboutImage1Container,
  AboutSectionPartHalfHeader,
  AboutSectionPartHalfText,
  AboutSectionPartColumn,
  AboutContainerBg,
  About3ImageContainer,
  About3ImageLeft,
  About3ImageRight,
  AboutContainerimg,
  AboutContainerimg2,
  AboutContainerimg3,
} from "./about.element";
import image_3_1 from "../../../assets/image/about/photo 1.png";
import image_3_2 from "../../../assets/image/about/photo 2.png";
import image_3_3 from "../../../assets/image/about/photo 3.png";
import image_2 from "../../../assets/image/about/Lookbook 1.png";
import image_about1 from "../../../assets/image/about/About Us Photo 1.png";
import image_about2 from "../../../assets/image/about/About Us Photo 2.png";

const about = () => {
  return (
    <>
      <AboutContainerBg id="about" name="about">
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
                    <AboutContainerimg src={image_about1} alt="uifw" />
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
              <AboutSectionPart2>
                <AboutSectionPartHalf>
                  <AboutSectionPartColumn>
                    <AboutSectionPartHalfHeader>
                      About UI Fashion Week
                    </AboutSectionPartHalfHeader>
                    <AboutSectionPartHalfText>
                      UI Fashion Week has a wide range of different people
                      participated in such as models, fashion companies,
                      influencers, designers, etc. Becoming the hot topic in
                      fashion industry every year, UI Fashion Week has been
                      presenting several different themes that could bring a
                      huge impact and awareness related to fashion.
                    </AboutSectionPartHalfText>
                  </AboutSectionPartColumn>
                </AboutSectionPartHalf>
                <AboutSectionPartHalf>
                  <AboutImage1Container>
                    {/* <AboutImage2 src={image_test} alt="vision" loading="Lazy" /> */}
                    <AboutContainerimg src={image_about2} alt="uifw" />
                  </AboutImage1Container>
                </AboutSectionPartHalf>
              </AboutSectionPart2>
            </AboutSection>
            <AboutSection id="gallery">
              <AboutContainerimg2 src={image_2} alt="uifw" />
            </AboutSection>
            <AboutSection>
              <About3ImageContainer>
                <About3ImageLeft src={image_3_1} alt="uifw" />
              </About3ImageContainer>
              <About3ImageContainer>
                <AboutContainerimg3 src={image_3_2} alt="uifw" />
              </About3ImageContainer>
              <About3ImageContainer>
                <About3ImageRight src={image_3_3} alt="uifw" />
              </About3ImageContainer>
            </AboutSection>
          </AboutContent>
        </AboutContainer>
      </AboutContainerBg>
    </>
  );
};

export default about;
