import React from "react";
import {
  Footer,
  FooterContainer,
  FooterLeft,
  FooterLogoContainer,
  FooterLink,
  FooterText,
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
            <FooterLink href="#">
              <img src={Linkedin_logo} />{" "}
            </FooterLink>
          </FooterLogoContainer>
          <FooterLogoContainer>
            <FooterLink href="#">
              <img src={Insta_logo} />
            </FooterLink>
          </FooterLogoContainer>
          <FooterLogoContainer>
            <FooterLink href="#">
              <img src={Youtube_logo} />
            </FooterLink>
          </FooterLogoContainer>
        </FooterLeft>
      </FooterContainer>
    </Footer>
  );
};
export default footer;
