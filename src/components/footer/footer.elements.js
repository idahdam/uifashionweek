import styled from "styled-components";

export const Footer = styled.div`
  background: rgba(253, 251, 250, 0.6);
  backdrop-filter: blur(20px);
  height: 100px;
  display: flex;
  padding: 0 5%;
  justify-content: center;
  align-items: center;
  font-size: 1.2 rem;
  top: 0;
  z-index: 999;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  max-width: 1366px;
  padding-left:5%;
  padding-right:5%;
  @media screen and (max-width: 960px) {
    padding: 0;
    width: 65%;
  }
`;
export const FooterLeft = styled.div`
  float: left;
  width: 50%;
`;
export const FooterLogoContainer = styled.div`
  float: right;
  width: 10%;
  display: flex;
`;

export const FooterLink = styled.a`
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const FooterText = styled.div`
font-family :"Metropolis"
font-szie :16px;
margin-top: 2%;
`
