import React from "react";
import {
  AboutContainer,
  AboutHeaderContainer,
  AboutHeader,
  AboutContentContainer,
  ElipsBG1,
  ElipsBG2,
  
} from "./about.element";
const about = () => {
  return (
    <>
      <AboutContainer>
        {/* <ElipsBG1/>
        <ElipsBG2/> */}
        <AboutHeaderContainer>
          <AboutHeader>About Us</AboutHeader>
        </AboutHeaderContainer>
        {/* <AboutContentContainer>
          ini isi pertama
        </AboutContentContainer> */}
      </AboutContainer>
    </>
  );
};

export default about;
