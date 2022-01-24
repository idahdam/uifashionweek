import React from "react";
import medpar_pc from "../../../assets/image/sponsor/medpar-pc.png";
import sponsor_pc from "../../../assets/image/sponsor/1-pc.png";
import newtab from "../../../assets/image/sponsor/newtab.png";
import sponsor_phone from "../../../assets/image/sponsor/1-phone.png";
import medpar_phone from "../../../assets/image/sponsor/medpar-phone.png";
import neo from "../../../assets/image/sponsor/neo-soho.png";
import {
  SponsorContainer,
  SponsorContent,
  SponsorSectionHeader,
  SponsorHeader,
  SponsorDeco,
  SponsorSection,
  SponsorImage,
  SponsorImage1,
  SponsorImage2,
  SponsorRow,
  SponsorColumn,
  SponsorSectionColumn,
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
                  <SponsorSectionColumn>
                    <SponsorSection>Official Website Partner</SponsorSection>
                    <SponsorImage src={newtab} width={200}></SponsorImage>
                  </SponsorSectionColumn>
                </SponsorColumn>
                <SponsorColumn>
                  <SponsorSectionColumn>
                    <SponsorSection>Official Venue Partner</SponsorSection>
                    <SponsorImage src={neo}></SponsorImage>
                  </SponsorSectionColumn>
                </SponsorColumn>
              </SponsorRow>
              <SponsorSection>Sponsor</SponsorSection>
              <SponsorImage1 src={sponsor_pc} width={200}></SponsorImage1>
              <SponsorImage2 src={sponsor_phone}></SponsorImage2>
              <SponsorSection>Media Partner</SponsorSection>
              <SponsorImage1 src={medpar_pc}></SponsorImage1>
              <SponsorImage2 src={medpar_phone}></SponsorImage2>
            </SponsorSectionHeader>
          </SponsorContent>
        </SponsorDeco>
      </SponsorContainer>
    </>
  );
};

export default sponsor;
