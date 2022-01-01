import React, { useState } from "react";
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
  const [activeStep, setActiveStep] = useState(0);
  const goToPreviousStep = () => {
    setActiveStep(activeStep !== 0 ? activeStep - 1 : activeStep);
  };
  const goToNextStep = () => {
    setActiveStep(activeStep !== 6 ? activeStep + 1 : activeStep);
  };

  return (
    <>
      {activeStep === 0 && <OkRegisterUserNameForm />}
      {activeStep === 1 && <OkRegisterUserEmailForm />}
      {activeStep === 2 && <OkRegisterUserUsernameForm />}
      {activeStep === 3 && <OkRegisterUserPasswordForm />}
      {activeStep === 4 && <OkRegisterUserDocumentsForm />}
      {activeStep === 5 && <OkRegisterUserAcceptsDocuments />}
      {activeStep === 6 && <OkRegisterUserSubmit />}
      <OkButtonsNavigation
        onPrevious={goToPreviousStep}
        onNext={goToNextStep}
      />
    </>
  );
}
