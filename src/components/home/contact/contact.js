import React from "react";
import {
  ContactContainer,
  ContactContent,
  ContactSectionHeader,
  ContactHeader,
  Circle
} from "./contact.element";
const Contact = () => {
  return (
    <>
      <ContactContainer>
        <Circle />
        <ContactContent>
          <ContactSectionHeader>
            <ContactHeader>Contact</ContactHeader>
          </ContactSectionHeader>
        </ContactContent>
      </ContactContainer>
    </>
  );
};

export default Contact;
