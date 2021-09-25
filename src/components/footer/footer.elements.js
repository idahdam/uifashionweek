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
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2%;
  @media (max-width:960px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const FooterLeft = styled.div`
  float: left;
  width: 40%;
  flex-wrap: wrap;
  flex-direction: row;
  @media (max-width:960px) {
    margin-bottom:5%;
    top:0;
    width: 100%;
  }
`;
export const FooterLogoContainer = styled.div`
  float: right;
  width: 10%;
  display: flex;
  @media (max-width:960px) {
    width: 30%;
    margin-right:2%;
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
margin-top: 2%;
@media (max-width:960px) {
  text-align:center;
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