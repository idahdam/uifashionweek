import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #ffffff;
  background-image: radial-gradient(
      at 47% 33%,
      hsl(119.38, 47%, 59%) 0,
      transparent 59%
    ),
    radial-gradient(at 82% 65%, hsl(17.89, 89%, 52%) 0, transparent 55%);
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align: center;
`;

export const AboutContent = styled.div`
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

export const AboutSectionHeader = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  padding: 1%;
  margin: 0;
`;

export const AboutSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10%;
`;

export const AboutSectionPart = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding-top: 2px;
  padding-left: 2px;
`;

export const AboutSectionPartColumn = styled.div`
  width: 70%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  margin-top:15%;
`;

export const AboutSectionPartHalf = styled.div`
  width: 48%;
  display: flex;
  float: left;
  // background-color: red;
`;
export const AboutSectionPartHalfHeader = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  // top: 50%;
  // left: 50%;
  margin: 0 auto;
`;

export const AboutSectionPartHalfText = styled.div`
Font family: Metropolis
Font style: Regular
Font size: 16px
Align: Justified;
margin-top:10%;
// top: 50%;
//   left: 50%;
`;

export const AboutHeader = styled.header`
  font-size: 48px;
  text-align: center;
  font-weight: bold;
`;

export const ElipsBG1 = styled.div`
  position: absolute;
  float: left;
  width: 500px;
  height: 500px;
  background: #68c867;
  filter: blur(500px);
  broder-radius: 50%;
  opacity: 0.7;
`;

export const ElipsBG2 = styled.div`
  position: absolute;
  float: right;
  width: 500px;
  height: 500px;
  background: #f25918;
  filter: blur(500px);
  broder-radius: 50%;
  opacity: 0.7;
`;

export const AboutImage1 = styled.img`
  width: 200px;
  height: 250px;
  border-radius: 0 200px 0 0;
  -moz-border-radius: 0 200px 0 0;
  -webkit-border-radius: 0 200px 0 0;
  transform: rotate(-5.19deg);
`;

export const AboutImage1Container = styled.div`
  width: 50%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
`;

export const AboutImage2 = styled.img`
  width: 200px;
  height: 250px;
  border-radius: 80px;
  border: 4px;
`;

export const AboutImage2Container = styled.div`
  width: 50%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
`;
