import React from "react";
import OkDesktopCommunityProfile from "./components/OkDesktopCommunityProfile"
import OkMobileCommunityProfile from "./components/OkMobileCommunityProfile"
import OkHomePage from "~/layouts/OkHomePage";
import twi from "~/lib/tailwind";

export default function OkCommunityProfile() {
  return (
    <OkHomePage>
      {twi.prefixMatch('md') && <OkDesktopCommunityProfile />}
      {!twi.prefixMatch('md') && <OkMobileCommunityProfile />}  
    </OkHomePage>
  );
};