import styled from "styled-components";

export const AboutImage1 = styled.img`
  width: 478px;
  height: 716px;
  background: red;
  border-radius: 0 0 478px 0;
  -moz-border-radius: 0 0 478px 0;
  -webkit-border-radius: 0 0 478px 0;
`;
export const AboutContainer = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align: center;
`;

export const AboutContent = styled.div`
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  height: 100vh;
  max-width: 1230px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align: center;
`;

export const AboutSectionHeader = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  padding: 1%;
  margin: 0;
`;

export const AboutSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const AboutSectionPart = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0;
`;

export const AboutSectionPartHalf = styled.div`
  width: 50%;
  display: flex;
  float: left;
  align-content: center;
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
