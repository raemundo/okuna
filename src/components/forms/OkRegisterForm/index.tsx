import React from "react";
import { View, Text } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import OkButtonsNavigation from "~/components/navigation/OkButtonsNavigation";
import OkRegisterUserNameForm from "./components/OkRegisterUserNameForm";
import OkRegisterUserEmailForm from "./components/OkRegisterUserEmailForm";
import OkRegisterUserUsernameForm from "./components/OkRegisterUserUsernameForm";
import OkRegisterUserPasswordForm from "./components/OkRegisterUserPasswordForm";
import OkRegisterUserDocumentsForm from "./components/OkRegisterUserDocumentsForm";
import OkRegisterUserAcceptsDocuments from "./components/OkRegisterUserAcceptsDocuments";
import OkRegisterUserSubmit from "./components/OkRegisterUserSubmit";
// import OkRegisterUserSuggestedCommunities  from './components/OkRegisterUserSuggestedCommunities';

export default function OkRegisterForm() {
  return (
    <View>
      <OkButtonsNavigation />
      <OkRegisterUserNameForm />
      <OkRegisterUserEmailForm />
      <OkRegisterUserUsernameForm />
      <OkRegisterUserPasswordForm />
      <OkRegisterUserDocumentsForm />
      <OkRegisterUserAcceptsDocuments />
      <OkRegisterUserSubmit />
    </View>
  );
}
