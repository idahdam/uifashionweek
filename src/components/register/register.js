import React, { useState } from "react";
import {
  RegisterContainer,
  RegisterContainerRow,
  RegisterContainerCol,
  RegisterContainerCol2,
  RegisterImage,
  RegisterCardContainer,
  RegisterCardTitle,
  RegisterCardDescription,
  RegisterFormContainer,
  RegisterInput,
  RegisterSelect,
  RegisterOptionDefault,
  RegisterOption,
  RegisterButtonContainer,
  RegisterButton,
  RegisterPageCountContainer,
  RegisterPageFaq,
  RegisterSlide4box,
  RegisterUploadForm,
  RegisterUploadZone,
} from "./register.element";
import image from "../../assets/image/register/left.png";
import Faq from "./faqcontent";
import "./slider.css";

const Register = () => {
  const [page, setPage] = useState(1);
  const [upload, setUpload] = useState(false);
  let card;

  if (page === 0) {
    card = (
      <>
        <RegisterCardTitle>FAQ</RegisterCardTitle>
        <RegisterCardDescription>Personal Data</RegisterCardDescription>
        <RegisterFormContainer>
          <RegisterPageFaq>
            <Faq />
          </RegisterPageFaq>
        </RegisterFormContainer>
        <RegisterPageCountContainer>(4/4)</RegisterPageCountContainer>
        <RegisterButtonContainer>
          <RegisterButton onClick={() => setPage(1)}>Go Back</RegisterButton>
          {/* <RegisterButton onClick={() => console.log("last page")}>
            Submit
          </RegisterButton> */}
        </RegisterButtonContainer>
      </>
    );
  } else if (page === 1) {
    card = (
      <>
        <RegisterCardTitle>Model Hunt Registration</RegisterCardTitle>
        <RegisterCardDescription>Personal Data</RegisterCardDescription>
        <RegisterFormContainer>
          <RegisterInput placeholder="Full Name" type="text" />
          <RegisterInput placeholder="Nickname" type="text" />
          <RegisterSelect>
            <RegisterOptionDefault value="" disabled selected hidden>
              Gender
            </RegisterOptionDefault>
            <RegisterOption value="0">Male</RegisterOption>
            <RegisterOption value="1">Female</RegisterOption>
            <RegisterOption value="2">Rather Not To Say</RegisterOption>
          </RegisterSelect>
          <RegisterInput placeholder="Birthday..." type="text" />
          <RegisterInput placeholder="ID Number" type="text" />
          <RegisterInput placeholder="Profession" type="text" />
          <RegisterInput placeholder="Address" type="text" />
          <RegisterInput placeholder="Contact WA / LINE" type="text" />
          <RegisterInput placeholder="Instagram" type="text" />
        </RegisterFormContainer>
        <RegisterPageCountContainer>(1/4)</RegisterPageCountContainer>
        <RegisterButtonContainer>
          <RegisterButton onClick={() => setPage(0)}>FAQ</RegisterButton>
          <RegisterButton onClick={() => setPage(2)}>Next</RegisterButton>
        </RegisterButtonContainer>
      </>
    );
  } else if (page === 2) {
    card = (
      <>
        <RegisterCardTitle>Model Hunt Registration</RegisterCardTitle>
        <RegisterCardDescription>
          Body Measurement & Sizing
        </RegisterCardDescription>
        <RegisterFormContainer>
          <RegisterInput placeholder="Height (cm)" type="text" />
          <RegisterInput placeholder="Weight (kg)" type="text" />
          <RegisterSelect>
            <RegisterOptionDefault value="" disabled selected hidden>
              Top
            </RegisterOptionDefault>
            <RegisterOption value="0">S</RegisterOption>
            <RegisterOption value="1">M</RegisterOption>
            <RegisterOption value="2">XL</RegisterOption>
            <RegisterOption value="3">XXL</RegisterOption>
          </RegisterSelect>
          <RegisterSelect>
            <RegisterOptionDefault value="" disabled selected hidden>
              Bottom
            </RegisterOptionDefault>
            <RegisterOption value="0">S</RegisterOption>
            <RegisterOption value="1">M</RegisterOption>
            <RegisterOption value="2">XL</RegisterOption>
            <RegisterOption value="3">XXL</RegisterOption>
          </RegisterSelect>
          <RegisterInput placeholder="Shoe (UK)" type="text" />
        </RegisterFormContainer>
        <RegisterPageCountContainer>(2/4)</RegisterPageCountContainer>
        <RegisterButtonContainer>
          <RegisterButton onClick={() => setPage(1)}>Back</RegisterButton>
          <RegisterButton onClick={() => setPage(3)}>Next</RegisterButton>
        </RegisterButtonContainer>
      </>
    );
  } else if (page === 3) {
    card = (
      <>
        <RegisterCardTitle>Model Hunt Registration</RegisterCardTitle>
        <RegisterCardDescription>
          Contract and Health Agreement
        </RegisterCardDescription>
        <RegisterFormContainer>
          <RegisterSelect>
            <RegisterOptionDefault value="" disabled selected hidden>
              Lagi kontrak sama Agency?
            </RegisterOptionDefault>
            <RegisterOption value="0">Yes</RegisterOption>
            <RegisterOption value="1">No</RegisterOption>
          </RegisterSelect>
          <RegisterInput placeholder="Jika iya agency apa?" type="text" />
          <RegisterSelect>
            <RegisterOptionDefault value="" disabled selected hidden>
              Jika tidak sedang dikontrak, pernah kontrak sama agency gak
              sebelumnya?
            </RegisterOptionDefault>
            <RegisterOption value="0">Yes</RegisterOption>
            <RegisterOption value="1">No</RegisterOption>
          </RegisterSelect>
          <RegisterInput
            placeholder="Pernah kontak dengan agency apa sebelumnya?"
            type="text"
          />
          <RegisterSelect>
            <RegisterOptionDefault value="" disabled selected hidden>
              Bergabung model karena direkomendasi panitia?
            </RegisterOptionDefault>
            <RegisterOption value="0">Yes</RegisterOption>
            <RegisterOption value="1">No</RegisterOption>
          </RegisterSelect>
          <RegisterInput placeholder="Udah Vaksin atau belum?" type="text" />
          <RegisterInput placeholder="Vaksin keberapa?" type="text" />
        </RegisterFormContainer>
        <RegisterPageCountContainer>(3/4)</RegisterPageCountContainer>
        <RegisterButtonContainer>
          <RegisterButton onClick={() => setPage(2)}>Back</RegisterButton>
          <RegisterButton onClick={() => setPage(4)}>Next</RegisterButton>
        </RegisterButtonContainer>
      </>
    );
  } else if (page === 4) {
    card = (
      <>
        <RegisterCardTitle>Model Hunt Registration</RegisterCardTitle>
        <RegisterCardDescription>Personal Data</RegisterCardDescription>
        <br />
        <RegisterFormContainer>
          <RegisterButtonContainer>
            <div class="switch-button">
              <input
                class="switch-button-checkbox"
                type="checkbox"
                onClick={() => setUpload(!upload)}
              ></input>
              <label class="switch-button-label" for="">
                <span class="switch-button-label-span">
                  <div class="text">Requitments</div>
                </span>
              </label>
            </div>
          </RegisterButtonContainer>
          {upload ? (
            <>
              <RegisterSlide4box>
                <RegisterUploadZone>Drop Files Here</RegisterUploadZone>
                <RegisterUploadForm>
                  <input type="file" name="upfile" accept="image/*" required />
                  <input type="submit" value="Upload File" />
                </RegisterUploadForm>
              </RegisterSlide4box>
            </>
          ) : (
            <>
              <RegisterSlide4box>
                Terms and Condition:
                <br />
                <br />
                1. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                <br />
                2. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                <br />
                3. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                <br />
                4. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                <br />
                5. Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </RegisterSlide4box>
            </>
          )}
        </RegisterFormContainer>
        <RegisterPageCountContainer>(4/4)</RegisterPageCountContainer>
        <RegisterButtonContainer>
          <RegisterButton onClick={() => setPage(3)}>Back</RegisterButton>
          <RegisterButton onClick={() => alert("belom diintegrasi.")}>
            Submit
          </RegisterButton>
        </RegisterButtonContainer>
      </>
    );
  }
  return (
    <>
      <RegisterContainer>
        <RegisterContainerRow>
          <RegisterContainerCol>
            <RegisterImage src={image} alt="image" />
          </RegisterContainerCol>
          <RegisterContainerCol2>
            <RegisterCardContainer>{card}</RegisterCardContainer>
          </RegisterContainerCol2>
        </RegisterContainerRow>
      </RegisterContainer>
    </>
  );
};

export default Register;
