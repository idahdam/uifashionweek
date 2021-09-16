import styled from "styled-components";

export const Footer = styled.div`
  bottom: 0;
  width: 100%;
  background: rgba(253, 251, 250, 0.6);
  backdrop-filter: blur(20px);
  radius: 20px;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const FooterContainer = styled.div`
  justify-content: center;
  max-width: 1280px;
  height: 60px;
  margin: 0 auto;
`;
export const FooterLeft = styled.div`
  float: left;
  width: 50%;
  height: 60%;
  margin-top:1%;
`;
export const FooterRight = styled.div`
  float: right;
  width: 50%;
  height: 60%;
  margin-top:1%;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const FooterRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
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

export const FooterHeading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
