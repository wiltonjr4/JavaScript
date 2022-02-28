import React, { Component } from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import { validateCPF, validatePassword } from "./models/register";
import RegisterValidations from "./contexts/RegisterValidations";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Register Form
        </Typography>
        <RegisterValidations.Provider
          value={{ cpf: validateCPF, password: validatePassword }}
        >
          <RegisterForm onSend={onSend} />
        </RegisterValidations.Provider>
      </Container>
    );
  }
}

function onSend(data) {
  console.log(data);
}

export default App;
