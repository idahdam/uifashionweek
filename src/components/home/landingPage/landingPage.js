import React from "react";
import {
  // LandingPageInside,
  LandingPageContainer,
  LandingPageContent,
  // LandingPageBg,
  LandingPageHeader,
  LandingPageImage,
  LandingPageCaption,
  LandingPageButton,
  LandingPageLink,
} from "./landingPage.element";
import CircleText from "../../../assets/image/landing-page/AssetCircle.png";
// import bgimage from "../../../assets/image/landing-page/LandingPage-bg.png";

const landingPage = () => {
  return (
    <>
      <LandingPageContainer id="hero">
        {/* <LandingPageInside> */}
        {/* <LandingPageBg src={bgimage} alt="vision" loading="lazy"/> */}
        <LandingPageContent>
          <LandingPageImage src={CircleText} />
          <LandingPageCaption>
            <LandingPageHeader>
              UI FASHION <br />
              WEEK
            </LandingPageHeader>
          </LandingPageCaption>
          <LandingPageLink to="/register">
            <LandingPageButton>Register</LandingPageButton>
          </LandingPageLink>
        </LandingPageContent>
        {/* </LandingPageInside> */}
      </LandingPageContainer>
    </>
  );
};

export default landingPage;
