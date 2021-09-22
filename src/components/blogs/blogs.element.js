import styled from "styled-components";
import { Link } from "react-router-dom";

export const BlogsContainer = styled.div``;

export const BlogsHero = styled.div``;

export const BlogsHeroImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

export const BlogsContent = styled.div`
  padding-top: 2.5rem;
`;
export const BlogsTitleContainer = styled.div`
  text-align: left;
  padding: 0 20%;
`;

export const BlogsTitle = styled.div`
  font-size: 4rem;
  text-align: left;
  margin-top: 2.5%;
`;

export const BlogsBody = styled.div`
  padding: 2.5% 20%;
  line-height: 2;
`;

export const BlogsDetails = styled.div`
  padding: 0 20%;
  padding-top: 2.5%;
  text-align: left;
`;
export const BlogsWriter = styled.span`
  padding-right: 15%;
`;

export const BlogsDate = styled.span``;

export const BlogsLinkHome = styled(Link)`
  font-family: "Metropolis Bold";
  font-size: 16px;
  line-height: 152%;
  color: #91350e;
  padding: 2% 0%;
  margin-bottom: 2%;
  text-align: left;
  text-decoration: none;
`;

export const BlogsLinkContainer = styled.a`
  width: 100%;
  margin: 5% 0%;
`;
