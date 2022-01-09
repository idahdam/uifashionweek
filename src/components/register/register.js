import React, { useState, useEffect } from "react";
import {
  RegisterContainer,
  RegisterContainerRow,
  RegisterContainerCol,
  RegisterContainerCol2,
  RegisterImage,
  RegisterCardContainer,
  RegisterCardTitle,
  RegisterCardDescription,
  RegisterCardDescription2,
  RegisterFormContainer,
  RegisterInput,
  RegisterSelect,
  RegisterOptionDefault,
  RegisterOption,
  RegisterButtonContainer,
  RegisterButton,
  RegisterPageCountContainer,
  RegisterPageFaq,
  RegisterTermsContainer,
  RegisterCheckBoxInput,
} from "./register.element";
import leftModel from "../../assets/image/register/left.png";
import Faq from "./faqcontent";
import Terms from "./termcontent";
import "./slider.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useHistory } from "react-router";
import FadeLoader from "react-spinners/FadeLoader";
import { ticketCounterService } from "../../services/ticketCounterService";

const Register = () => {
  const [page, setPage] = useState(1);
  let totalTickets = 22;
  const [counter, setCounter] = useState([]);
  const [sessionOneCount, setSessionOneCount] = useState(0);
  const [sessionTwoCount, setSessionTwoCount] = useState(0);
  const [sessionThreeCount, setSessionThreeCount] = useState(0);
  const [sessionFourCount, setSessionFourCount] = useState(0);
  // const [upload, setUpload] = useState(false);
  const [loading, setLoading] = useState(true);
  const [button, setButton] = useState(true);

  // input and files area
  const [image1, setImage1] = useState(null);

  const [fullName, setFullName] = useState(null);
  const [ticketType, setTicketType] = useState(null);
  const [amount, setAmount] = useState(0);
  const [multiplier, setMultiplier] = useState(50000);
  const [total, setTotal] = useState(0);

  const [email, setEmail] = useState(null);
  const [whatsapp, setWhatsapp] = useState(null);
  const [vaccinated, setVaccinated] = useState(null);

  // sessions
  const [session1, setSession1] = useState(false);
  const [session2, setSession2] = useState(false);
  const [session3, setSession3] = useState(false);
  const [session4, setSession4] = useState(false);

  // mobile photo
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    setTotal(amount * multiplier);
    const fetchCounters = async () => {
      await ticketCounterService.getCounters().then((response) => {
        setCounter(response.data);
        if (loading !== false) {
          response.data.forEach((item, index) => {
            if (item.session_1 === 1) {
              setSessionOneCount((sessionOneCount) => sessionOneCount + 1);
            }
            if (item.session_2 === 1) {
              setSessionTwoCount((sessionTwoCount) => sessionTwoCount + 1);
            }
            if (item.session_3 === 1) {
              setSessionThreeCount(
                (sessionThreeCount) => sessionThreeCount + 1
              );
            }
            if (item.session_4 === 1) {
              setSessionFourCount((sessionFourCount) => sessionFourCount + 1);
            }
          });
        }
      });
    };
    fetchCounters();
    setLoading(false);
  }, [amount, multiplier, total]);

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  window.addEventListener("resize", showButton);
  const history = useHistory();

  const areYouSure = async () => {
    if (
      fullName === null ||
      !fullName.trim() ||
      email === null ||
      !email.trim() ||
      total === 0 ||
      whatsapp === null ||
      !whatsapp.trim() ||
      amount === null ||
      vaccinated === null ||
      image1 === null
    ) {
      Swal.fire(
        "Hold up!",
        "Make sure to fill all the fields OR choose a ticket to buy",
        "warning"
      );
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
          await axios.post("https://api.uifashionweek.com/ticketings", {
            status: "unchecked",
            full_name: fullName,
            email: email,
            wa_number: whatsapp,
            vaccinated: vaccinated,
            // ticket_type: ticketType,
            amount: amount * multiplier,
            photo: res.data,
            photo_url: res.data[0].url,
            session_1: session1 ? 1 : 0,
            session_2: session2 ? 1 : 0,
            session_3: session3 ? 1 : 0,
            session_4: session4 ? 1 : 0,
          });
        })
        .then((res) => {
          // setLoading(false);
          Swal.fire({
            icon: "success",
            title: "Submitted!",
            html: "Thank you! Your ticket will be processed via email.",
            showConfirmButton: true,
          }).then((result) => {
            if (result.isConfirmed || result.isDismissed) {
              history.push("/");
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

  if (loading) return null;
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
                      Ticketing Registration
                    </RegisterCardTitle>
                    <RegisterCardDescription>
                      Personal Identity
                    </RegisterCardDescription>
                    <RegisterCardDescription2>
                      Please double check your identity.
                    </RegisterCardDescription2>
                    <RegisterFormContainer>
                      <RegisterInput
                        placeholder="Full Name"
                        type="text"
                        onChange={(event) => setFullName(event.target.value)}
                        value={fullName}
                      />
                      <RegisterInput
                        placeholder="Whatsapp Number"
                        type="text"
                        onChange={(event) => setWhatsapp(event.target.value)}
                        value={whatsapp}
                      />
                      <RegisterInput
                        placeholder="Email"
                        type="text"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                      />
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
                        <RegisterOption value="first_dose">
                          First dose
                        </RegisterOption>
                        <RegisterOption value="second_dose">
                          Second dose
                        </RegisterOption>
                      </RegisterSelect>
                    </RegisterFormContainer>
                    <RegisterPageCountContainer>
                      (1/3)
                    </RegisterPageCountContainer>
                    <RegisterButtonContainer>
                      {/* <RegisterButton onClick={() => setPage(0)}>
                        FAQ
                      </RegisterButton> */}
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
                      Ticketing Registration
                    </RegisterCardTitle>
                    <RegisterCardDescription>Ticket</RegisterCardDescription>
                    <RegisterCardDescription2>
                      Please select your attendance option
                    </RegisterCardDescription2>
                    <RegisterFormContainer>
                      <RegisterTermsContainer>
                        <Terms />
                      </RegisterTermsContainer>
                      <RegisterCheckBoxInput
                        type={"checkbox"}
                        onClick={() => {
                          setSession1(!session1);
                          if (!session1 === true) {
                            setAmount(amount + 1);
                          } else {
                            setAmount(amount - 1);
                          }
                        }}
                        checked={session1}
                      />
                      <label for="Session 1">
                        {`Session 1: ${
                          totalTickets - sessionOneCount
                        } ticket(s) left!`}{" "}
                      </label>
                      <br />
                      <br />
                      <RegisterCheckBoxInput
                        type={"checkbox"}
                        onClick={() => {
                          setSession2(!session2);
                          if (!session2 === true) {
                            setAmount(amount + 1);
                          } else {
                            setAmount(amount - 1);
                          }
                        }}
                        checked={session2}
                      />
                      <label for="Session 2">
                        {`Session 2: ${
                          totalTickets - sessionTwoCount
                        } ticket(s) left!`}{" "}
                      </label>
                      <br />
                      <br />
                      <RegisterCheckBoxInput
                        type={"checkbox"}
                        onClick={() => {
                          setSession3(!session3);
                          if (!session3 === true) {
                            setAmount(amount + 1);
                          } else {
                            setAmount(amount - 1);
                          }
                        }}
                        checked={session3}
                      />
                      <label for="Session 3">
                        {`Session 3: ${
                          totalTickets - sessionThreeCount
                        } ticket(s) left!`}{" "}
                      </label>
                      <br />
                      <br />
                      <RegisterCheckBoxInput
                        type={"checkbox"}
                        onClick={() => {
                          setSession4(!session4);
                          if (!session4 === true) {
                            setAmount(amount + 1);
                          } else {
                            setAmount(amount - 1);
                          }
                        }}
                        checked={session4}
                      />
                      <label for="Session 4">
                        {`Session 4: ${
                          totalTickets - sessionFourCount
                        } ticket(s) left!`}{" "}
                      </label>
                      <br />
                      <br />
                    </RegisterFormContainer>
                    <RegisterCardDescription2>
                      <br />
                      Total:{" Rp"}
                      {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </RegisterCardDescription2>
                    <RegisterPageCountContainer>
                      (2/3)
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
                      Ticketing Registration
                    </RegisterCardTitle>
                    <h2>
                      Total:{" "}
                      <b>
                        {"Rp"}
                        {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </b>
                    </h2>
                    <RegisterCardDescription>
                      Please complete your payment through
                      <br />
                    </RegisterCardDescription>
                    <RegisterCardDescription2>
                      Bank Mandiri <b>1570006860630 (Jessica Zefanya)</b>
                    </RegisterCardDescription2>
                    <RegisterFormContainer>
                      Upload your proof of payment here. Please insert in .jpg
                      or .png format.
                      <br />
                      <br />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage1(e.target.files[0])}
                      />
                      <br />
                    </RegisterFormContainer>
                    <RegisterPageCountContainer>
                      (3/3)
                    </RegisterPageCountContainer>
                    <RegisterButtonContainer>
                      <RegisterButton
                        onClick={() => {
                          setPage(2);
                          setImage1(null);
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
