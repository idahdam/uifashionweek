import React from "react";
import {
  ContactContainer,
  ContactContent,
  ContactSectionHeader,
  ContactHeader,
  ContactSection,
  ContactSectionLeft,
  // ContactSectionRight,
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
                  Get in touch with us!
                </ContactSectionHeaderText>
                <ContacSectionText>
                  Got any questions? Kindly click the button below!
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
