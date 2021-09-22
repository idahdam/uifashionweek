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
  // RegisterUploadForm,
  // RegisterUploadZone,
  // RegisterUploadInput,
} from "./register.element";
import leftModel from "../../assets/image/register/left.png";
import Faq from "./faqcontent";
import "./slider.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useHistory } from "react-router";

const Register = () => {
  const [page, setPage] = useState(1);
  const [upload, setUpload] = useState(false);

  // input and files area
  const [image, setImage] = useState(null);

  const [fullName, setFullName] = useState("");
  const [nickname, setNickname] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [idNumber, setIdNumber] = useState(0);
  const [profession, setProfession] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [instagram, setInstagram] = useState("");

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [shoe, setShoe] = useState(0);

  const [contactAgency, setContactAgency] = useState(0);
  const [agencyName, setAgencyName] = useState("");
  const [contracted, setContracted] = useState(0);
  const [agencyName2, setAgencyName2] = useState("");
  const [recommendation, setRecommandation] = useState(false);
  const [vaccinated, setVaccinated] = useState("");
  const [amountVaccine, setAmounVaccine] = useState("");

  const history = useHistory();
  let card;

  const onSubmit = async () => {
    const formData = new FormData();
    // const formsApplicant = new FormData();
    formData.append("files", image);
    try {
      await axios
        .post("https://api.uifashionweek.com/upload", formData)
        // .then((res) => console.log(res))
        .then(async (res) => {
          // console.log(res.data[0]);
          await axios
            .post("https://api.uifashionweek.com/forms", {
              full_name: fullName,
              nickname: nickname,
              sex: gender,
              dob: birthday,
              id_number: idNumber,
              profession: profession,
              address: address,
              email: "",
              phone: "",
              line_id: contact,
              instagram: instagram,
              height: height,
              weight: weight,
              top: top,
              bottom: bottom,
              shoes: shoe,
              vaccinated: amountVaccine,
              vaccine_why_when: "",
              in_contact_agency: true,
              agency_name: agencyName,
              found_source: "",
              name_and_division: "",
              photos: res.data[0],
            })
            // .then((res) => console.log(res))
            .then((res) => {
              console.log(res);
              Swal.fire({
                icon: "success",
                title: "File sudah ter-upload!",
                showConfirmButton: false,
                timer: 1500,
              });
              history.push("/");
            });
          console.log(res);
        });
    } catch (err) {
      // console.log(err);
      Swal.fire({
        icon: "error",
        title: err,
        text: "Apa kamu sudah memilih file gambar? (.png/.jpg)?",
        footer: '<a href="https://google.com">Why do I have this issue?</a>',
      });
    }
  };
  return (
    <>
      <RegisterContainer>
        <RegisterContainerRow>
          <RegisterContainerCol>
            <RegisterImage src={leftModel} alt="image" />
          </RegisterContainerCol>
          <RegisterContainerCol2>
            <RegisterCardContainer>
              {page === 0 ? (
                <>
                  <>
                    <RegisterCardTitle>FAQ</RegisterCardTitle>
                    <RegisterCardDescription></RegisterCardDescription>
                    <RegisterFormContainer>
                      <RegisterPageFaq>
                        <Faq />
                      </RegisterPageFaq>
                    </RegisterFormContainer>
                    <RegisterPageCountContainer></RegisterPageCountContainer>
                    <RegisterButtonContainer>
                      <RegisterButton onClick={() => setPage(1)}>
                        Go Back
                      </RegisterButton>
                    </RegisterButtonContainer>
                  </>
                </>
              ) : null}
              {page === 1 ? (
                <>
                  <>
                    <RegisterCardTitle>
                      Model Hunt Registration
                    </RegisterCardTitle>
                    <RegisterCardDescription>
                      Personal Data
                    </RegisterCardDescription>
                    <RegisterFormContainer>
                      <RegisterInput
                        placeholder="Full Name"
                        type="text"
                        onChange={(event) => setFullName(event.target.value)}
                        value={fullName}
                      />
                      <RegisterInput
                        placeholder="Nickname"
                        type="text"
                        onChange={(event) => setNickname(event.target.value)}
                        value={nickname}
                      />
                      <RegisterSelect
                        onChange={(event) => setGender(event.target.value)}
                      >
                        <RegisterOptionDefault
                          value={gender}
                          disabled
                          selected
                          hidden
                        >
                          Gender
                        </RegisterOptionDefault>
                        <RegisterOption value="male">Male</RegisterOption>
                        <RegisterOption value="female">Female</RegisterOption>
                        <RegisterOption value="ratherNotToSay">
                          Rather Not To Say
                        </RegisterOption>
                      </RegisterSelect>
                      <RegisterInput
                        placeholder="Birthday..."
                        type="text"
                        onChange={(event) => setBirthday(event.target.value)}
                        value={birthday}
                      />
                      <RegisterInput
                        placeholder="ID Number"
                        type="text"
                        onChange={(event) => setIdNumber(event.target.value)}
                        value={idNumber}
                      />
                      <RegisterInput
                        placeholder="Profession"
                        type="text"
                        onChange={(event) => setProfession(event.target.value)}
                        value={profession}
                      />
                      <RegisterInput
                        placeholder="Address"
                        type="text"
                        onChange={(event) => setAddress(event.target.value)}
                        value={address}
                      />
                      <RegisterInput
                        placeholder="Contact WA / LINE"
                        type="text"
                        onChange={(event) => setContact(event.target.value)}
                        value={contact}
                      />
                      <RegisterInput
                        placeholder="Instagram"
                        type="text"
                        onChange={(event) => setInstagram(event.target.value)}
                        value={instagram}
                      />
                    </RegisterFormContainer>
                    <RegisterPageCountContainer>
                      (1/4)
                    </RegisterPageCountContainer>
                    <RegisterButtonContainer>
                      <RegisterButton onClick={() => setPage(0)}>
                        FAQ
                      </RegisterButton>
                      <RegisterButton onClick={() => setPage(2)}>
                        Next
                      </RegisterButton>
                    </RegisterButtonContainer>
                  </>
                </>
              ) : null}
              {page === 2 ? (
                <>
                  <>
                    <RegisterCardTitle>
                      Model Hunt Registration
                    </RegisterCardTitle>
                    <RegisterCardDescription>
                      Body Measurement & Sizing
                    </RegisterCardDescription>
                    <RegisterFormContainer>
                      <RegisterInput
                        placeholder="Height (cm)"
                        type="text"
                        onChange={(event) => setHeight(event.target.value)}
                        value={height}
                      />
                      <RegisterInput
                        placeholder="Weight (kg)"
                        type="text"
                        onChange={(event) => setWeight(event.target.value)}
                        value={weight}
                      />
                      <RegisterSelect
                        onChange={(event) => setTop(event.target.value)}
                      >
                        <RegisterOptionDefault
                          value=""
                          disabled
                          selected
                          hidden
                        >
                          Top
                        </RegisterOptionDefault>
                        <RegisterOption value="s">S</RegisterOption>
                        <RegisterOption value="m">M</RegisterOption>
                        <RegisterOption value="xl">XL</RegisterOption>
                        <RegisterOption value="xxl">XXL</RegisterOption>
                      </RegisterSelect>
                      <RegisterSelect
                        onChange={(event) => setBottom(event.target.value)}
                      >
                        <RegisterOptionDefault
                          value=""
                          disabled
                          selected
                          hidden
                        >
                          Bottom
                        </RegisterOptionDefault>
                        <RegisterOption value="s">S</RegisterOption>
                        <RegisterOption value="m">M</RegisterOption>
                        <RegisterOption value="xl">XL</RegisterOption>
                        <RegisterOption value="xxl">XXL</RegisterOption>
                      </RegisterSelect>
                      <RegisterInput
                        placeholder="Shoe (UK)"
                        type="number"
                        onChange={(event) => setShoe(event.target.value)}
                        value={shoe}
                      />
                    </RegisterFormContainer>
                    <RegisterPageCountContainer>
                      (2/4)
                    </RegisterPageCountContainer>
                    <RegisterButtonContainer>
                      <RegisterButton onClick={() => setPage(1)}>
                        Back
                      </RegisterButton>
                      <RegisterButton onClick={() => setPage(3)}>
                        Next
                      </RegisterButton>
                    </RegisterButtonContainer>
                  </>
                </>
              ) : null}
              {page === 3 ? (
                <>
                  <>
                    <RegisterCardTitle>
                      Model Hunt Registration
                    </RegisterCardTitle>
                    <RegisterCardDescription>
                      Contract and Health Agreement
                    </RegisterCardDescription>
                    <RegisterFormContainer>
                      <RegisterSelect
                        onChange={(event) =>
                          setContactAgency(event.target.value)
                        }
                      >
                        <RegisterOptionDefault
                          value=""
                          disabled
                          selected
                          hidden
                        >
                          Lagi kontrak sama Agency?
                        </RegisterOptionDefault>
                        <RegisterOption value="true">Yes</RegisterOption>
                        <RegisterOption value="false">No</RegisterOption>
                      </RegisterSelect>
                      <RegisterInput
                        placeholder="Jika iya agency apa?"
                        type="text"
                        onChange={(event) => setAgencyName(event.target.value)}
                        value={agencyName}
                      />
                      <RegisterSelect
                        onChange={(event) => setContracted(event.target.value)}
                      >
                        <RegisterOptionDefault
                          value=""
                          disabled
                          selected
                          hidden
                        >
                          Jika tidak sedang dikontrak, pernah kontrak sama
                          agency gak sebelumnya?
                        </RegisterOptionDefault>
                        <RegisterOption value="0">Yes</RegisterOption>
                        <RegisterOption value="1">No</RegisterOption>
                      </RegisterSelect>
                      <RegisterInput
                        placeholder="Pernah kontak dengan agency apa sebelumnya?"
                        type="text"
                        onChange={(event) => setAgencyName2(event.target.value)}
                        value={agencyName2}
                      />
                      <RegisterSelect
                        onChange={(event) =>
                          setRecommandation(event.target.value)
                        }
                      >
                        <RegisterOptionDefault
                          value=""
                          disabled
                          selected
                          hidden
                        >
                          Bergabung model karena direkomendasi panitia?
                        </RegisterOptionDefault>
                        <RegisterOption value="0">Yes</RegisterOption>
                        <RegisterOption value="1">No</RegisterOption>
                      </RegisterSelect>
                      <RegisterSelect
                        onChange={(event) =>
                          setAmounVaccine(event.target.value)
                        }
                      >
                        <RegisterOptionDefault
                          value=""
                          disabled
                          selected
                          hidden
                        >
                          How many times have you had your vaccine(s)?
                        </RegisterOptionDefault>
                        <RegisterOption value="once">Once</RegisterOption>
                        <RegisterOption value="twice">Twice</RegisterOption>
                        <RegisterOption value="none">None</RegisterOption>
                      </RegisterSelect>
                      <RegisterInput
                        placeholder="Kenapa dan kapan akan vaksin?"
                        type="text"
                        onChange={(event) => setVaccinated(event.target.value)}
                        value={vaccinated}
                      />
                    </RegisterFormContainer>
                    <RegisterPageCountContainer>
                      (3/4)
                    </RegisterPageCountContainer>
                    <RegisterButtonContainer>
                      <RegisterButton onClick={() => setPage(2)}>
                        Back
                      </RegisterButton>
                      <RegisterButton onClick={() => setPage(4)}>
                        Next
                      </RegisterButton>
                    </RegisterButtonContainer>
                  </>
                </>
              ) : null}
              {page === 4 ? (
                <>
                  <>
                    <RegisterCardTitle>
                      Model Hunt Registration
                    </RegisterCardTitle>
                    <RegisterCardDescription>
                      Personal Data
                    </RegisterCardDescription>
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
                              <div class="text">Requirements</div>
                            </span>
                          </label>
                        </div>
                      </RegisterButtonContainer>
                      {upload ? (
                        <>
                          <RegisterSlide4box>
                            {/* <RegisterUploadZone>Drop Files Here</RegisterUploadZone>
                <RegisterUploadForm></RegisterUploadForm> */}
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => setImage(e.target.files[0])}
                            />
                          </RegisterSlide4box>
                        </>
                      ) : (
                        <>
                          <RegisterSlide4box>
                            Terms and Condition:
                            <br />
                            <br />
                            1. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit
                            <br />
                            2. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit
                            <br />
                            3. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit
                            <br />
                            4. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit
                            <br />
                            5. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit
                          </RegisterSlide4box>
                        </>
                      )}
                    </RegisterFormContainer>
                    <RegisterPageCountContainer>
                      (4/4)
                    </RegisterPageCountContainer>
                    <RegisterButtonContainer>
                      <RegisterButton onClick={() => setPage(3)}>
                        Back
                      </RegisterButton>
                      <RegisterButton onClick={() => onSubmit()}>
                        Submit
                      </RegisterButton>
                    </RegisterButtonContainer>
                  </>
                </>
              ) : null}
            </RegisterCardContainer>
          </RegisterContainerCol2>
        </RegisterContainerRow>
      </RegisterContainer>
    </>
  );
};

export default Register;
