import styled from "styled-components";
import { Element } from "react-scroll";
export const AboutContainerBg = styled(Element)`
  background-image: linear-gradient(
    to bottom,
    #e2f1f4,
    #eaf4f9,
    #f3f7fc,
    #fafbfd,
    #ffffff
  );
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align: center;
  font-family: Metropolis regular;
`;

export const AboutContainer = styled.div`
  background-image: radial-gradient(
      at 2% 50%,
      hsl(119.26, 99%, 32%) 0,
      transparent 20%
    ),
    radial-gradient(at 96% 30%, hsl(119.26, 99%, 32%) 0, transparent 20%),
    radial-gradient(at 96% 70%, hsl(119.26, 99%, 32%) 0, transparent 20%);
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align: center;
  position: relative;
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
  padding-top: 5%;
`;

export const AboutSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2%;
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
  margin-top: 15%;
`;

export const AboutSectionPartHalf = styled.div`
  width: 48%;
  display: flex;
  float: left;
  margin-top: 5%;
  // background-color: red;
`;
export const AboutSectionPartHalfHeader = styled.div`
  font-family: "Metropolis Bold";
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
Font size: 16px;
line-height: 152%;
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

export const About3ImageContainer = styled.div`
width:33.3%;
float :left;
display: grid;`

export const About3ImageLeft = styled.img`
margin-top:-5%
width: 100%;;
`

export const About3ImageRight = styled.img`
margin-top:40%;`
