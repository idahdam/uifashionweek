import styled from "styled-components";

export const AboutImage1 = styled.img`
  width: 200px;
  height: 250px;
  border-radius: 0 200px 0 0;
  -moz-border-radius: 0 200px 0 0;
  -webkit-border-radius: 0 200px 0 0;
  transform: rotate(-5.19deg);
`;

export const AboutImage1Container = styled.div`
  width: 50%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
`;

export const AboutImage2 = styled.img`
  width: 200px;
  height: 250px;
  border-radius: 80px;
  border: 4px;
`;

export const AboutImage2Container = styled.div`
  width: 50%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
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
  height: 100vh;
`;

export const AboutSectionPart = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0;
  height: 50vh;
`;

export const AboutSectionPartHalf = styled.div`
  width: 50%;
  display: flex;
  float: left;
  height: 50vh;
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
