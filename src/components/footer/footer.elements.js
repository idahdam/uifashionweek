import styled from "styled-components";

export const Footer = styled.div`
  background: rgba(253, 251, 250, 0.6);
  backdrop-filter: blur(20px);
  height: 50px;
  display: flex;
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
  @media (max-width:960px) {
    width: 100%;
  }
`;
export const FooterLeft = styled.div`
  float: left;
  width: 100%;
  text-align:center;
  flex-wrap: wrap;
  flex-direction: row;
  @media (max-width:960px) {
    top:0;
    width: 100%;
    overflow-x: hidden;
  }
`;

export const FooterLogoContainer = styled.div`
  float: right;
  width: 10%;
  display: flex;
  @media (max-width:960px) {
    width: 30%;
    margin-right:2%;
    overflow-x: hidden;
  }
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
@media (max-width:960px) {
  text-align:center;
  font-size :14px;
}
`

export const FooterImgLogo  = styled.img`
width:100%;
margin:0 auto;
@media (max-width:960px) {
  margin-left:55%;
  width:75%;
}
`