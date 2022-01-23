import React from "react";
import medpar_pc from "../../../assets/image/sponsor/medpar-pc.png";
import sponsor_pc from "../../../assets/image/sponsor/1-pc.png";
import newtab from "../../../assets/image/sponsor/newtab.png";
import neo from "../../../assets/image/sponsor/neo-soho.png";
import {
  SponsorContainer,
  SponsorContent,
  SponsorSectionHeader,
  SponsorHeader,
  SponsorDeco,
  SponsorSection,
  SponsorImage,
  SponsorRow,
  SponsorColumn,
} from "./sponsor.element";
const sponsor = () => {
  return (
    <>
      <SponsorContainer>
        <SponsorDeco>
          <SponsorContent>
            <SponsorSectionHeader>
              <SponsorHeader>Sponsor & Partnership</SponsorHeader>
              <SponsorRow>
                <SponsorColumn>
                  <SponsorSection>Official Website Partner</SponsorSection>
                  <SponsorImage src={newtab} width={200}></SponsorImage>
                </SponsorColumn>
                <SponsorColumn>
                  <SponsorSection>Official Website Partner</SponsorSection>
                  <SponsorImage src={neo}></SponsorImage>
                </SponsorColumn>
              </SponsorRow>
              <SponsorSection>Sponsor</SponsorSection>
              <SponsorImage src={sponsor_pc}></SponsorImage>
              <SponsorSection>Media Partner</SponsorSection>
              <SponsorImage src={medpar_pc}></SponsorImage>
            </SponsorSectionHeader>
          </SponsorContent>
        </SponsorDeco>
      </SponsorContainer>
    </>
  );
};

export default sponsor;
