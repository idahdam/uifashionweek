import styled from "styled-components";

export const SponsorContainer = styled.div`
  background: linear-gradient(
    to top,
    #ffffff,
    #e5e9f0,
    #eef0f5,
    #f7f7fa,
    #ffffff
  );
  z-index: 1;
  width: 100%;
  height: 1280px;
  margin-left: auto;
  margin-right: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin-top: 7%;
  @media screen and (max-width: 960px) {
    padding-top: 5%;
  }
  border-bottom-color: transparent;
  padding-bottom: 30%;
  @media (max-width: 930px) {
    height: 1380px;
  }
`;

export const SponsorDeco = styled.div`
  background-image: radial-gradient(
      at -10% 25%,
      hsl(119.38, 47%, 59%) 0,
      transparent 20%
    ),
    radial-gradient(at 110% 75%, hsl(119.38, 47%, 59%) 0, transparent 20%);
  width: 100%;
  height: 100%;
`;

export const SponsorContent = styled.div`
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

export const SponsorSectionHeader = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  padding: 1%;
  margin: 0;
`;

export const SponsorHeader = styled.header`
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

export const SponsorSection = styled.p`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  @media (max-width: 930px) {
    width: 100%;
    font-size: 20px;
  }
`;

export const SponsorImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const SponsorRow = styled.div`
margin-left: auto;
margin-right: auto;
width: 100%;
overflow: hidden;
display: flex;
flex-direction: row;
flex-wrap: wrap;
@media (max-width: 930px) {
  flex-direction: column;
}
`;

export const SponsorColumn = styled.div`
  width: 48%;
  display: flex;
  float: left;
  margin-top: 5%;
  @media (max-width: 930px) {
    width: 100%;
    padding-left: 5%;
  }
`;

export const SponsorSectionColumn = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  margin-top: 15%;
  @media (max-width: 930px) {
    width: 100%;
    margin-bottom: 5%;
  }
`;