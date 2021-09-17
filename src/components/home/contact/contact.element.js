import styled from "styled-components";

export const ContactContainer = styled.div`
  background-color: #ffffff;
  background-image: radial-gradient(
    farthest-side at 20% 100%,
    #ffffff 0%,
    #497099 0%,
    #ffffff,
    transparent 100%
  );
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

export const Circle = styled.div`
Fill Color Style: Secondary/50;
Fill: Solid #497099;
Effect: Layer blur
Radius: 700px
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

export const ContactSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  margin-top: 8%;
`;

export const ContactSectionLeft = styled.div`
  width: 48%;
  display: flex;
  float: left;
  margin-top: 5%;
  height: 100%;
`;
export const ContactSectionRight = styled.div`
  width: 48%;
  display: flex;
  float: right;
  margin-top: 5%;
`;

export const ContactImage = styled.img`
  margin: 0 auto;
`;
export const ContacSectionHeader = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  // top: 50%;
  // left: 50%;
  width: 70%;
  display: flex;
`;

export const ContacSectionText = styled.div`
Font family: Metropolis
Font style: Regular
Font size: 16px
Align: Justified;
margin-top:10%;
// top: 50%;
//   left: 50%;
width: 100%;
display: flex;
`;

export const ContactSectionColumn = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  margin-top: 15%;
`;

export const ContactPageButton = styled.button`
  background: #03a301;
  left: 0;
  border: none;
  border-radius: 15px;
  position: absolute;
  color: white;
  width: 203px;
  height: 47px;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  opacity: 1;
  transition: 0.3s;
  cursor: pointer;
  margin-top: 5%;
  &:hover {
    opacity: 0.6;
  }
`;
