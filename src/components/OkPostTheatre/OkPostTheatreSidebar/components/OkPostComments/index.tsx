import React from "react";
import { View, Text } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import OkPostComment from "~/components/OkPostTheatre/OkPostTheatreSidebar/components/OkPostComments/components/OkPostComment";
import OkPostCommentsSortSwitcher from "~/components/OkPostTheatre/OkPostTheatreSidebar/components/OkPostComments/components/OkPostCommentsSortSwitcher";
import OkLoadMore from "~/components/utils/OkLoadMore";
import OkLoadingIndicator from "~/components/utils/OkLoadingIndicator";

export default function OkPostComments() {
  return (
    <>
      <OkPostCommentsSortSwitcher />
      <OkPostComment />
      <OkLoadMore />
    </>
  );
}
