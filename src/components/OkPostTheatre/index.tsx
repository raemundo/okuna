import React from "react";
import { View, Text } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import OkPostTheatreMedia from "~/components/OkPostTheatre/OkPostTheatreMedia";
import OkPostTheatreSidebar from "~/components/OkPostTheatre/OkPostTheatreSidebar";
import OkLoadingIndicator from "~/components/utils/OkLoadingIndicator";
import Card from "native-headless-ui/src/components/Card";

export default function OkPostTheatre() {
  return (
    <Card style={tw`flex-row flex-wrap`}>
      <OkPostTheatreMedia />
      <OkPostTheatreSidebar />
    </Card>
  );
}
