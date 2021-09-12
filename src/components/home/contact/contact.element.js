import styled from "styled-components";

export const ContactContainer = styled.div`
  background-color: #ffffff;
  background-image: radial-gradient(
      at -10% 160%,
      hsl(119.38, 47%, 59%) 0,
      transparent 59%
    ),
    radial-gradient(at 70% -30%, hsl(17.89, 89%, 52%) 0, transparent 55%);
  z-index: 1;
  width: 100%;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @media screen and (max-width: 960px) {
    padding-top: 5%;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  max-width: 1230px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align: center;
`;

export const ContactSectionHeader = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  padding: 1%;
  margin: 0;
`;

export const ContactHeader = styled.header`
  font-size: 48px;
  text-align: center;
  font-weight: bold;
`;

export const AboutSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 8%;
`;