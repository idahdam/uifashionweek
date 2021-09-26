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
  ContacSectionText,
  ContactSectionHeaderText,
  ContactSectionColumn,
  ContactPageButton,
} from "./contact.element";
import image_1 from "../../../assets/image/contact/Contact_pic.png";

const Contact = () => {
  return (
    <>
      <ContactContainer id="contactus">
        <ContactContent>
          <ContactSectionHeader>
            <ContactHeader>Contact</ContactHeader>
          </ContactSectionHeader>
          <ContactSection>
            <ContactSectionLeft>
              <ContactSectionColumn>
                <ContactSectionHeaderText>
                  Lorem ipsum dolor sit amet
                </ContactSectionHeaderText>
                <ContacSectionText>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea ommodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum"
                </ContacSectionText>
                <ContactPageButton
                  href="https://linktr.ee/uifashionweek21"
                  target="_blank"
                >
                  Contact Us
                </ContactPageButton>
              </ContactSectionColumn>
            </ContactSectionLeft>
            <ContactSectionLeft>
              <ContactImage src={image_1} />
            </ContactSectionLeft>
          </ContactSection>
        </ContactContent>
      </ContactContainer>
    </>
  );
};

export default Contact;
