import styled from "styled-components";

export const BlogContainer = styled.div`
  background-color: #ffffff;
  // background-image: radial-gradient(
  //     at 10% 90%,
  //     hsl(119.38, 47%, 59%) 0,
  //     transparent 59%
  //   ),
  //   radial-gradient(at 90% -12%, hsl(17.89, 89%, 52%) 0, transparent 55%);
  z-index: 1;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin-top: 5%;
  @media screen and (max-width: 960px) {
    padding-top: 5%;
    margin-bottom: 10%;
  }
`;

export const BlogContent = styled.div`
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

export const BlogSectionHeader = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  padding: 1%;
  margin: 0;
`;

export const BlogHeader = styled.header`
  font-size: 48px;
  text-align: center;
  font-weight: bold;
`;

export const BlogSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
  // background: red 5%;
  margin-top: 1%;
`;

export const BlogCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  height: 469px;
  margin: auto;
  margin-left: 4%;
  padding: 0.5%;
  float: left;
  background: rgba(255, 255, 255, 0.21);
  backdrop-filter: blur(76.15px);
  border-radius: 19px;
  // background: blue;
  margin-top: 1%;
`;

export const BlogCardTitle = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 135%;
  /* or 32px */
  text-transform: capitalize;
  color: #000000;
  margin-top: 1%;
`;

export const BlogCardTitleType = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  color: #91350e;
  margin-top: 1%;
`;

export const BlogCardText = styled.div`
  font-family: montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 152%;
  max-width: 100%;
  text-align: justify;
  margin-top: 1%;
`;

export const BlogCardImageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 4%;
`;

export const BlogCardContainer = styled.div`
  width: 90%;
  height: 500px;
  margin: 0 auto;
  margin-bottom:2%;
  // background: yellow;
`;

export const BlogCardContentContainer = styled.div`
  // background: green;
  width: 95%;
  margin: 0 auto;
  height: 96%;
`;

export const BlogCardImg = styled.img`
  width: 100%;
`;

export const BlogCardLinkContainer = styled.a`
  float: right;
  margin-top: 2%;
`;

export const BlogCardLink = styled.a`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-align: justify;
  color: #91350e;
`;
