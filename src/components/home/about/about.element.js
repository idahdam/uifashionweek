import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  height: 100vh;
  max-width: 1366px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align: center;
`;

export const AboutSectionHeader = styled.div`
  max-wdith: 1366;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  padding: 1%;
  margin: 0;
`;

export const AboutSection = styled.div`
  max-wdith: 1366;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const AboutSectionPart = styled.div`
  max-wdith: 1366;
  width: 100%;
  overflow: hidden;
  margin: 0;
`;

export const AboutHeader = styled.header`
  font-size: 48px;
  text-align: center;
  font-weight: bold;
`;

export const ElipsBG1 = styled.div`
  position: absolute;
  float: left;
  width: 500px;
  height: 500px;
  background: #68c867;
  filter: blur(500px);
  broder-radius: 50%;
  opacity: 0.7;
`;

export const ElipsBG2 = styled.div`
  position: absolute;
  float: right;
  width: 500px;
  height: 500px;
  background: #f25918;
  filter: blur(500px);
  broder-radius: 50%;
  opacity: 0.7;
`;
