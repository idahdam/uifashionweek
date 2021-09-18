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
          </RegisterContainerCol>
          <RegisterContainerCol>
            <RegisterImage src={image} alt="image" />
          </RegisterContainerCol>
        </RegisterContainerRow>
      </RegisterContainer>
    </>
  );
};

export default Register;
