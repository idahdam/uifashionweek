import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color:white;
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  height: 100vh;
`;

export const AboutHeaderContainer = styled.div`
  max-wdith: 1366;
  margin-left: auto;
  margin-right: auto;
  `

export const  AboutHeader = styled.header`
  font-size: 48px;
  text-align: center;
  font-weight: bold;
  `
export const AboutContentContainer = styled.div`
  max-wdith: 1366;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  float:top;
  `
export const ElipsBG1 = styled.div`
position: absolute;
float: left;
width: 500px;
height: 500px;
background: #68C867;
filter: blur(500px);
broder-radius:50%; 
opacity: 0.7;
`

export const ElipsBG2 = styled.div`
position: absolute;
float: right;
width: 500px;
height: 500px;
background: #F25918;;
filter: blur(500px);
broder-radius:50%;
opacity: 0.7; 
`