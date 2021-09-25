import React from "react";
import {
  Footer,
  FooterContainer,
  FooterLeft,
  FooterLogoContainer,
  FooterLink,
  FooterText,
  FooterImgLogo,
} from "./footer.elements";

import Linkedin_logo from "../../assets/image/footer/Group 111.png";
import Insta_logo from "../../assets/image/footer/Group 112.png";
import Youtube_logo from "../../assets/image/footer/Group 113.png";

const footer = () => {
  return (
    <Footer>
      <FooterContainer>
        <FooterLeft>
          <FooterText>Copyright @UI Fashion Week</FooterText>
        </FooterLeft>
        <FooterLeft>
          <FooterLogoContainer>
            <FooterLink href="li">
              <FooterImgLogo src={Linkedin_logo} alt="uifw" />{" "}
            </FooterLink>
          </FooterLogoContainer>
          <FooterLogoContainer>
            <FooterLink href="ig">
              <FooterImgLogo src={Insta_logo} alt="uifw" />
            </FooterLink>
          </FooterLogoContainer>
          <FooterLogoContainer>
            <FooterLink href="yt">
              <FooterImgLogo src={Youtube_logo} alt="uifw" />
            </FooterLink>
          </FooterLogoContainer>
        </FooterLeft>
      </FooterContainer>
    </Footer>
  );
};
export default footer;
