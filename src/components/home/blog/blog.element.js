import styled from "styled-components";
import { Link } from "react-router-dom";

export const BlogContainer = styled.div`
  background-color: #ffffff;
  background-image: radial-gradient(
    at 200% 50%,
    hsl(210.75, 35%, 44%) 0,
    transparent 60%
  );
  z-index: -1;
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
  margin-left: 5%;
  margin-bottom: 5%;
  padding: 0.5%;
  float: left;
  background: rgba(255, 255, 255, 0.21);
  backdrop-filter: blur(76.15px);
  border-radius: 19px;
  // background: blue;
  margin-top: 1%;
`;

export const BlogCardTitle = styled.div`
  margin-top: 5%;
  font-family: "Metropolis Regular";
  font-size: 24px;
  /* or 32px */

  text-transform: capitalize;
`;

export const BlogCardTitleType = styled.div`
  font-family: "Metropolis Regular";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  color: #91350e;
  margin-top: 1%;
  padding-top: 5%;
`;

export const BlogCardText = styled.div`
  font-family: "Metropolis Regular";
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
  margin-bottom: 2%;
  // background: yellow;
`;

export const BlogCardContentContainer = styled.div`
  // background: green;
  width: 95%;
  margin: 0 auto;
  height: 96%;
`;

export const BlogCardImg = styled.img`
  width: 285px;
  height: 225px;
  object-fit: cover;
`;

export const BlogCardLinkContainer = styled.a`
  float: right;
  margin-top: 2%;
`;

export const BlogCardLink = styled(Link)`
  font-family: "Metropolis Bold";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-align: justify;
  color: #91350e;
  text-decoration: none;
`;

export const BlogButton = styled.button`
  margin: 0 auto;
  display: block;
  border: none;
  background: transparent;
  font-family: Metropolis Bold;
  font-size: 20px;
  color: #91350e;
  text-decoration-line: underline;
`;

export const BlogButtonContainer = styled.div`
  align-items: center;
`;
