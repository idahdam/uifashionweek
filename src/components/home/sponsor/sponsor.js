import React from "react";
import {
  SponsorContainer,
  SponsorContent,
  SponsorSectionHeader,
  SponsorHeader,
  SponsorDeco,
} from "./sponsor.element";
const sponsor = () => {
  return (
    <>
      <SponsorContainer>
        <SponsorDeco>
        <SponsorContent>
          <SponsorSectionHeader>
            <SponsorHeader>Sponsor</SponsorHeader>
          </SponsorSectionHeader>
        </SponsorContent>
        </SponsorDeco>
      </SponsorContainer>
    </>
  );
};

export default sponsor;
