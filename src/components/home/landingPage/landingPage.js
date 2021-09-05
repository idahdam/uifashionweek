import React from "react";
import {
  LandingPageContainer,
  LandingPageContent,
  LandingPageHeader,
  LandingPageImage,
  LandingPageCaption,
  LandingPageButton,
} from "./landingPage.element";
import CircleText from "../../../assets/image/landing-page/AssetCircle.png";

const landingPage = () => {
  return (
    <>
      <LandingPageContainer>
        <LandingPageContent>
          <LandingPageImage src={CircleText} />
          <LandingPageCaption>
            <LandingPageHeader>
              UI FASHION <br />
              WEEK
            </LandingPageHeader>
          </LandingPageCaption>
          <LandingPageButton>REGISTER</LandingPageButton>
        </LandingPageContent>
      </LandingPageContainer>
    </>
  );
};

export default landingPage;
