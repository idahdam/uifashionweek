import styled from "styled-components";

export const Footer = styled.div`
  background: rgba(253, 251, 250, 0.6);
  backdrop-filter: blur(20px);
  height: 60px;
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
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1366px;
  @media screen and (max-width: 960px) {
    padding: 0;
    width: 65%;
  }
`;
export const FooterLeft = styled.div`
  float: left;
  width: 40%;
  height: 60%;
  margin-top: 1%;
`;
export const FooterRight = styled.div`
  float: left;
  width: 40%;
  height: 60%;
  margin-top: 1%;
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;
