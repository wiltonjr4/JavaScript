import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DeliveryData from "./DeliveryData";
import PersonalData from "./PersonalData";
import UserData from "./UserData";

function RegisterForm({ onSend }) {
  const [currentStage, setCurrentStage] = useState(0);
  const [collectedData, setCollectedData] = useState({});

  useEffect(() => {
    if (currentStage === forms.length - 1) {
      onSend(collectedData);
    }
  });

  const forms = [
    <UserData onSend={next} />,
    <PersonalData onSend={next} />,
    <DeliveryData onSend={next} />,
    <Typography variant="h5">Thanks for Register!</Typography>,
  ];

  function next(data) {
    setCollectedData({ ...collectedData, ...data });
    setCurrentStage(currentStage + 1);
  }

  return <>
  <Stepper activeStep={currentStage}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Personal</StepLabel></Step>
      <Step><StepLabel>Delivery</StepLabel></Step>
      <Step><StepLabel>Finish</StepLabel></Step>
  </Stepper>
  {forms[currentStage]} </>;
}

export default RegisterForm;
