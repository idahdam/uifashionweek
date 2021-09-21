import React from "react";
import {
  ContactContainer,
  ContactContent,
  ContactSectionHeader,
  ContactHeader,
  ContactSection,
  ContactSectionLeft,
  ContactSectionRight,
  ContactImage,
  ContacSectionHeader,
  ContacSectionText,
  ContactSectionColumn,
  ContactPageButton,
} from "./contact.element";
import image_1 from "../../../assets/image/contact/Contact_pic.png";

const Contact = () => {
  return (
    <>
      <ContactContainer>
        <ContactContent>
          <ContactSectionHeader>
            <ContactHeader>Contact</ContactHeader>
          </ContactSectionHeader>
          <ContactSection>
            <ContactSectionLeft>
            <ContactSectionColumn>
              <ContacSectionHeader>
                Lorem ipsum dolor sit amet
              </ContacSectionHeader>
              <ContacSectionText>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea ommodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum"
              </ContacSectionText>
              <ContactPageButton>Contact Us</ContactPageButton>
              </ContactSectionColumn>
            </ContactSectionLeft>
            <ContactSectionRight>
              <ContactImage src={image_1} />
            </ContactSectionRight>
          </ContactSection>
        </ContactContent>
      </ContactContainer>
    </>
  );
};

export default Contact;
