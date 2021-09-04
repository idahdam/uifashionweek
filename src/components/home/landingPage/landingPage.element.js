import styled from "styled-components";
import bgimage from "../../../assets/image/landing-page/LandingPage-bg.png";

export const LandingPageContainer = styled.div`
  background-image: url(${bgimage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  @media screen and (max-width: 960px) {
    object-fit: cover;
    height: 100vh;
  }
`;
export const LandingPageContent = styled.div`
  // background-color: green;
  position: absolute;
  margin-left: 20%;
  margin-bottom: 5%;
  bottom: 0;
  width: 50%;
  height: 40%;
`;
export const LandingPageHeader = styled.h1`
  color: #f25918;
  font-size: 72px;
  line-height: 72px;
`;
export const LandingPageImage = styled.img`
  display: block;
  height: auto;
  floating: left;
  margin-top: 5%;
  margin-left: 20%;
  @media screen and (max-width: 960px) {
    object-fit: cover;
    height: 500px;
  }
`;
export const LandingPageCaption = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1366px;
  @media screen and (max-width: 960px) {
    text-align: left;
    transform: translate(-85%, -50%);
  }
`;

export const LandingPageButton = styled.button`
  background: #e97300;
  border: none;
  border-radius: 15px;
  position: absolute;
  color: white;
  width: 203px;
  height: 47px;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  bottom: 0;
  cursor: pointer;
`;
