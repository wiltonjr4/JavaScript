import React, { Component } from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Register Form
        </Typography>
        <RegisterForm onSubmit={onSend} validateCPF={validateCPF} />
      </Container>
    );
  }
}

function onSend(data) {
  console.log(data);
}

function validateCPF(cpf) {
  if (cpf.length !== 11) {
    return { valid: false, text: "CPF need to has 11 Numbers!" };
  } else {
    return { valid: true, text: "" };
  }
}

export default App;
