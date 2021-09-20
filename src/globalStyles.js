import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");
	font-family: Metropolis;
	box-sizing: border-none;
	margin: 0;
	padding: 0;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 50px;
    padding-left: 50px;
  }
`;

export const Button = styled.button`
  margin-left: 2em;
  border-radius: 4px;
  background: #101522;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    transition: all 0.3s ease-out;
    border-bottom: 6px solid white;
    border-top: 6px solid grey;
    transition: all 0.3s ease-out;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    background: #fff;
    background: ${({ primary }) => (primary ? "#101522" : "#101522")};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Line = styled.hr`
  border: 1px solid #101522;
  padding: 0.5rem;
  margin-bottom: 2.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  &:hover {
    // border: 2px solid #101522;
    transition: all 0.3s;
    box-shadow: 5px 10px;
    transition: 0.5s ease-out;
  }
  @media screen and (max-width: 960px) {
  }
`;
export default GlobalStyle;
