import styled from "styled-components";

export const ContactContainer = styled.div`
  background-color: #ffffff;
  // background-image: linear-gradient(
  //   to top,
  //   #497099,
  //   #6584a8,
  //   #7f99b7,
  //   #9aaec6,
  //   #b5c4d6,
  //   #c1cedd,
  //   #ced8e4,
  //   #dae2eb,
  //   #dae2eb,
  //   #dae2eb,
  //   #dae2eb,
  //   #dae2eb
  // );
  background-image: linear-gradient(
    to top,
    #497099,
    #7e90b2,
    #acb3cb,
    #d7d8e4,
    #ffffff
  );
  z-index: 1;
  width: 100%;
  max-height: 1080px;
  margin-left: auto;
  margin-right: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
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
  font-size: 32px;
  line-height: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  padding: 1%;
  margin: 0;
`;

export const ContactSectionHeaderText = styled.div`
  font-family: "Metropolis Bold";
  font-size: 32px;
  line-height: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  margin: 0;
`;

export const ContactHeader = styled.header`
  font-family: "Metropolis Regular";
  font-size: 48px;
  text-align: center;
  font-weight: bold;
`;

export const ContactSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 930px) {
    flex-direction: column-reverse;
  }
`;

export const ContactSectionLeft = styled.div`
  width: 48%;
  display: flex;
  float: left;
  margin-top: 5%;
  @media (max-width: 930px) {
    width: 100%;
    padding-left: 5%;
  }
`;
export const ContactSectionRight = styled.div`
  width: 48%;
  display: flex;
  float: right;
  margin-top: 5%;
  background: blue;
  @media (max-width: 930px) {
    width: 100%;
  }
`;

export const ContactImage = styled.img`
  margin: 0 auto;
  margin-left: 30%;
  @media (max-width: 930px) {
    width: 70%;
    margin-left: 10%;
  }
`;
export const ContacSectionHeader = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  // top: 50%;
  // left: 50%;
  width: 100%;
`;

export const ContacSectionText = styled.div`
Font family: "Metropolis Regular";
font-size: 16px;
line-height: 152%;
Align: Justified;
margin-top:5%;
// top: 50%;
//   left: 50%;

@media (max-width:930px) {
  font-size: 14px;
  padding-right:10%;
}
`;

export const ContactSectionColumn = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  margin-top: 15%;
`;

export const ContactPageButton = styled.a`
  background: #03a301;
  left: 0;
  border: 3px solid black;
  border-color: #03a301;
  border-radius: 15px;
  color: white;
  width: 190px;
  height: 30px;
  padding-top: 12px;
  font-family: "Metropolis Bold";
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  opacity: 1;
  transition: 0.3s;
  cursor: pointer;
  margin-top: 5%;
  cursor: pointer;

  &:hover {
    background: none;
    color: #ffffff;
  }

  @media (max-width: 930px) {
    padding-top: 8px;
    width: 150px;
    height: 20px;
    font-size: 14px;
    margin-left: 20%;
    margin-bottom: 10%;
  }
`;
