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
  RegisterInputLarge,
  RegisterSelect,
  RegisterOptionDefault,
  RegisterOption,
  RegisterButtonContainer,
  RegisterButton,
  RegisterPageCountContainer,
  RegisterPageFaq,
  RegisterSlide4box,
  RegisterUploadSlider,
} from "./register.element";
import leftModel from "../../assets/image/register/left.png";
import Faq from "./faqcontent";
import Terms from "./termcontent";
import "./slider.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useHistory } from "react-router";
import FadeLoader from "react-spinners/FadeLoader";

const Register = () => {
  const [page, setPage] = useState(1);
  const [upload, setUpload] = useState(false);
  const [loading, setLoading] = useState(false);
  const [button, setButton] = useState(true);

  // input and files area
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);

  const [fullName, setFullName] = useState(null);
  const [gender, setGender] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [idNumber, setIdNumber] = useState(null);
  const [profession, setProfession] = useState(null);
  const [address, setAddress] = useState(null);
  const [aboutMe, setAboutMe] = useState(null);
  const [email, setEmail] = useState(null);
  const [whatsapp, setWhatsapp] = useState(null);
  const [lineId, setLineId] = useState(null);
  const [instagram, setInstagram] = useState(null);

  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [waist, setWaist] = useState(null);
  const [bust, setBust] = useState(null);
  const [hip, setHip] = useState(null);
  const [top, setTop] = useState(null);
  const [bottom, setBottom] = useState(null);
  const [shoe, setShoe] = useState(null);

  const [vaccinated, setVaccinated] = useState(null);
  const [vaccineReason, setVaccineReason] = useState(null);
  const [currentlyUnderContract, setCurrentlyUnderContract] = useState(null);
  const [currentAgencyName, setCurrentAgencyName] = useState(null);
  const [everBeenUnderContract, setEverBeenUnderContract] = useState(null);
  const [exAgencyName, setExAgencyname] = useState(null);
  const [findOutSource, setFindOutSource] = useState(null);
  const [foundFromUIFW, setFoundFromUIFW] = useState(null);

  // mobile photo
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  window.addEventListener("resize", showButton);
  const history = useHistory();
  const areYouSure = () => {
    if (
      fullName === null ||
      gender === null ||
      birthday === null ||
      idNumber === null ||
      profession === null ||
      address === null ||
      aboutMe === null ||
      email === null ||
      whatsapp === null ||
      lineId === null ||
      instagram === null ||
      height === null ||
      weight === null ||
      waist === null ||
      bust === null ||
      hip === null ||
      top === null ||
      bottom === null ||
      shoe === null ||
      vaccinated === null ||
      vaccineReason === null ||
      currentlyUnderContract === null ||
      currentAgencyName === null ||
      everBeenUnderContract === null ||
      exAgencyName === null ||
      findOutSource === null ||
      foundFromUIFW === null ||
      image1 === null ||
      image2 === null ||
      image3 === null ||
      image3 === null ||
      image4 === null ||
      image5 === null ||
      image6 === null
    ) {
      Swal.fire("Hold up!", "Make sure to fill all the fields.", "warning");
    } else {
      Swal.fire({
        title: "Submit all of the data?",
        text: "Make sure you have checked all of the data!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Submit",
      }).then((result) => {
        if (result.isConfirmed) {
          onSubmit();
        }
      });
    }
  };

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append("files", image1);
    formData.append("files", image2);
    formData.append("files", image3);
    formData.append("files", image4);
    formData.append("files", image5);
    formData.append("files", image6);
    try {
      Swal.fire({
        icon: "info",
        title: "Uploading...",
        showConfirmButton: false,
        allowOutsideClick: false,
      });
      await axios
        .post("https://api.uifashionweek.com/upload", formData)
        .then(async (res) => {
          await axios.post("https://api.uifashionweek.com/forms", {
            paymentStatus: "unpaid",
            status: "unchecked",
            full_name: fullName,
            sex: gender,
            dob: birthday,
            id_number: idNumber,
            occupation: profession,
            address: address,
            about: aboutMe,
            email: email,
            wa_number: whatsapp,
            line_id: lineId,
            instagram: instagram,
            height: height,
            weight: weight,
            bust: bust,
            hip: hip,
            waist: waist,
            top: top,
            bottom: bottom,
            shoes: shoe,
            vaccinated: vaccinated,
            vaccinated_reason: vaccineReason,
            currently_under_contract_with_agency: currentlyUnderContract,
            current_agency_name: currentAgencyName,
            ever_been_under_contract: everBeenUnderContract,
            ex_agency_name: exAgencyName,
            find_out_source: findOutSource,
            found_from_uifw_committee: foundFromUIFW,
            photos: res.data,
          });
          console.log(res);
        })
        .then((res) => {
          // setLoading(false);
          console.log(res);
          Swal.fire({
            icon: "success",
            title: "File is submitted!",
            html:
              "Thank you for your submission. " +
              "Your data has been recorded. Please check your email regularly. " +
              "We will send you the payment details and further notice regarding the selection process.",
            showConfirmButton: true,
          }).then((result) => {
            if (result.isConfirmed || result.isDismissed) {
              history.push("/");
              console.log("asd");
            }
          });
        });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: err,
        text: "Something bad happened.",
        footer: '<a href="https://google.com">Why do I have this issue?</a>',
      });
    }
  };
  return (
    <>
      <RegisterContainer>
        <RegisterContainerRow>
          {button ? (
            <>
              <RegisterContainerCol>
                <RegisterImage src={leftModel} alt="image" />
              </RegisterContainerCol>
            </>
          ) : null}
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
                    <RegisterCardDescription>
                      Please fill empty space with "-"
                    </RegisterCardDescription>
                    <RegisterFormContainer>
                      <RegisterInput
                        placeholder="Full Name"
                        type="text"
                        onChange={(event) => setFullName(event.target.value)}
                        value={fullName}
                      />
                      <RegisterSelect
                        value={gender}
                        onChange={(event) => setGender(event.target.value)}
                      >
                        <RegisterOptionDefault disabled selected hidden>
                          Sex
                        </RegisterOptionDefault>
                        <RegisterOption value="male">Male</RegisterOption>
                        <RegisterOption value="female">Female</RegisterOption>
                        <RegisterOption value="ratherNotToSay">
                          Rather Not To Say
                        </RegisterOption>
                      </RegisterSelect>
                      <RegisterInput
                        placeholder="Place, Date of Birth"
                        type="text"
                        onChange={(event) => setBirthday(event.target.value)}
                        value={birthday}
                      />
                      <RegisterInput
                        placeholder="ID Number"
                        type="number"
                        maxLength="16"
                        onChange={(event) => setIdNumber(event.target.value)}
                        value={idNumber}
                      />
                      <RegisterInput
                        placeholder="Address"
                        type="text"
                        onChange={(event) => setAddress(event.target.value)}
                        value={address}
                      />
                      <RegisterInput
                        placeholder="Profession"
                        type="text"
                        onChange={(event) => setProfession(event.target.value)}
                        value={profession}
                      />
                      <RegisterInputLarge
                        placeholder="About Me"
                        type="text"
                        onChange={(event) => setAboutMe(event.target.value)}
                        value={aboutMe}
                      />
                      <RegisterInput
                        placeholder="Email"
                        type="text"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                      />
                      <RegisterInput
                        placeholder="Whatsapp Number"
                        type="text"
                        onChange={(event) => setWhatsapp(event.target.value)}
                        value={whatsapp}
                      />
                      <RegisterInput
                        placeholder="Line Id"
                        type="text"
                        onChange={(event) => setLineId(event.target.value)}
                        value={lineId}
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
                    <RegisterCardDescription>
                      Please fill empty space with "-"
                    </RegisterCardDescription>
                    <RegisterFormContainer>
                      <RegisterInput
                        placeholder="Height (cm)"
                        type="number"
                        onChange={(event) => setHeight(event.target.value)}
                        value={height}
                      />
                      <RegisterInput
                        placeholder="Weight (kg)"
                        type="number"
                        onChange={(event) => setWeight(event.target.value)}
                        value={weight}
                      />
                      <RegisterInput
                        placeholder="Waist (cm)"
                        type="number"
                        onChange={(event) => setWaist(event.target.value)}
                        value={waist}
                      />
                      <RegisterInput
                        placeholder="Bust (cm)"
                        type="text"
                        onChange={(event) => setBust(event.target.value)}
                        value={bust}
                      />
                      <RegisterInput
                        placeholder="Hip (cm)"
                        type="text"
                        onChange={(event) => setHip(event.target.value)}
                        value={hip}
                      />
                      <RegisterSelect
                        value={top}
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
                        value={bottom}
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
                    <RegisterCardDescription>
                      Please fill empty space with "-"
                    </RegisterCardDescription>
                    <RegisterFormContainer>
                      <RegisterSelect
                        value={vaccinated}
                        onChange={(event) => setVaccinated(event.target.value)}
                      >
                        <RegisterOptionDefault
                          value=""
                          disabled
                          selected
                          hidden
                        >
                          Have you been vaccinated?
                        </RegisterOptionDefault>
                        <RegisterOption value="once">First dose</RegisterOption>
                        <RegisterOption value="twice">
                          Second dose
                        </RegisterOption>
                        <RegisterOption value="not_yet">Not yet</RegisterOption>
                      </RegisterSelect>
                      <RegisterInput
                        placeholder="If you haven’t, could you tell us why and when will you get vaccinated?"
                        type="text"
                        onChange={(event) =>
                          setVaccineReason(event.target.value)
                        }
                        value={vaccineReason}
                      />
                      <RegisterSelect
                        value={currentlyUnderContract}
                        onChange={(event) =>
                          setCurrentlyUnderContract(event.target.value)
                        }
                      >
                        <RegisterOptionDefault
                          value=""
                          disabled
                          selected
                          hidden
                        >
                          Are you currently under contract with a modelling
                          agency?
                        </RegisterOptionDefault>
                        <RegisterOption value="yes">Yes</RegisterOption>
                        <RegisterOption value="no">No</RegisterOption>
                      </RegisterSelect>
                      <RegisterInput
                        placeholder="If so, what modelling agency?"
                        type="text"
                        onChange={(event) =>
                          setCurrentAgencyName(event.target.value)
                        }
                        value={currentAgencyName}
                      />
                      <RegisterSelect
                        value={everBeenUnderContract}
                        onChange={(event) =>
                          setEverBeenUnderContract(event.target.value)
                        }
                      >
                        <RegisterOptionDefault
                          value=""
                          disabled
                          selected
                          hidden
                        >
                          If not, have you ever been under contract with a
                          modelling agency?
                        </RegisterOptionDefault>
                        <RegisterOption value="yes">Yes</RegisterOption>
                        <RegisterOption value="no">No</RegisterOption>
                      </RegisterSelect>
                      <RegisterInput
                        placeholder="If so, what modelling agency?"
                        type="text"
                        onChange={(event) =>
                          setExAgencyname(event.target.value)
                        }
                        value={exAgencyName}
                      />
                      <RegisterSelect
                        value={findOutSource}
                        onChange={(event) =>
                          setFindOutSource(event.target.value)
                        }
                      >
                        <RegisterOptionDefault
                          value=""
                          disabled
                          selected
                          hidden
                        >
                          Where did you find out about UI FW 2022 Model Hunt?
                        </RegisterOptionDefault>
                        <RegisterOption value="instagram">
                          Instagram
                        </RegisterOption>
                        <RegisterOption value="tiktok">Tiktok</RegisterOption>
                        <RegisterOption value="twitter">Twitter</RegisterOption>
                        <RegisterOption value="uifwcommitte">
                          UIFW Committee
                        </RegisterOption>
                      </RegisterSelect>
                      <RegisterInput
                        placeholder="If you found out from the UI FW Committee, could you tell us the name and from what division?"
                        type="text"
                        onChange={(event) =>
                          setFoundFromUIFW(event.target.value)
                        }
                        value={foundFromUIFW}
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
                    <RegisterCardDescription>
                      Please fill empty space with "-"
                    </RegisterCardDescription>
                    <br />
                    <RegisterFormContainer>
                      <RegisterButtonContainer>
                        <RegisterUploadSlider>
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
                        </RegisterUploadSlider>
                      </RegisterButtonContainer>
                      {upload ? (
                        <>
                          <RegisterSlide4box>
                            All file format should be .jpg or .png with maximum
                            file size of 5MB.
                            <br />
                            <br />
                            <br />
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => setImage1(e.target.files[0])}
                            />
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => setImage2(e.target.files[0])}
                            />
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => setImage3(e.target.files[0])}
                            />
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => setImage4(e.target.files[0])}
                            />
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => setImage5(e.target.files[0])}
                            />
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => setImage6(e.target.files[0])}
                            />
                          </RegisterSlide4box>
                        </>
                      ) : (
                        <>
                          <RegisterSlide4box>
                            <Terms />
                          </RegisterSlide4box>
                        </>
                      )}
                    </RegisterFormContainer>
                    <RegisterPageCountContainer>
                      (4/4)
                    </RegisterPageCountContainer>
                    <RegisterButtonContainer>
                      <RegisterButton
                        onClick={() => {
                          setPage(3);
                          setUpload(false);
                        }}
                      >
                        Back
                      </RegisterButton>
                      <RegisterButton onClick={() => areYouSure()}>
                        Submit
                      </RegisterButton>
                    </RegisterButtonContainer>
                  </>
                </>
              ) : null}
              {loading ? (
                <div style={style}>
                  <FadeLoader />
                </div>
              ) : null}
            </RegisterCardContainer>
          </RegisterContainerCol2>
        </RegisterContainerRow>
      </RegisterContainer>
    </>
  );
};

export default Register;
