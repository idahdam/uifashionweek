import React from "react";
import {
  RegisterContainer,
  RegisterContainerRow,
  RegisterContainerCol,
  RegisterImage,
} from "./register.element";
import image from "../../assets/image/register/left.png";

const Register = () => {
  return (
    <>
      <RegisterContainer>
        <RegisterContainerRow>
          <RegisterContainerCol>
            <RegisterImage src={image} alt="image" />
            <RegisterImage src={image} alt="image" />
            <RegisterImage src={image} alt="image" />
          </RegisterContainerCol>
          <RegisterContainerCol>asdasds</RegisterContainerCol>
        </RegisterContainerRow>
      </RegisterContainer>
    </>
  );
};

export default Register;
