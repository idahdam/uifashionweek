import styled from "styled-components";
import bgimage from "../../../assets/image/landing-page/LandingPage-bg.png";

export const LandingPageContainer = styled.div`
  background-image: url(${bgimage});
  z-index: 1;
  width: 100%;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @media screen and (max-width: 960px) {
    padding-top: 5%;
  }
`;

export const LandingPageInside = styled.div`
  position: relative;
  display: inline-block;
  min-width: 100%;
  overflow: auto;
  @media screen and (max-width: 960px) {
    padding-top: 5%;
  }
`;
export const LandingPageBg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  @media screen and (max-width: 960px) {
    object-fit: cover;
    height: 500px;
  }
`;

export const LandingPageContent = styled.div`
  width: 100%;
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 70%;
  left: 45%;
  transform: translate(-50%, -50%);
  text-align: left;
  color: white;
`;
export const LandingPageHeader = styled.div`
  color: #f25918;
  font-family:"Metropolis Bold";
  font-size: 79px;
  text-align: left;
`;
export const LandingPageImage = styled.img`
  display: block;
  height: auto;
  floating: left;
  margin-left: 18%;
  margin-bottom: 10%;
`;
export const LandingPageCaption = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1566px;
`;

export const LandingPageButton = styled.button`
  background: #e97300;
  left: 0;
  border: none;
  border-radius: 15px;
  position: absolute;
  color: white;
  width: 203px;
  height: 47px;
  top: 100%;
  font-family:"Metropolis Bold";
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  opacity: 1;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
