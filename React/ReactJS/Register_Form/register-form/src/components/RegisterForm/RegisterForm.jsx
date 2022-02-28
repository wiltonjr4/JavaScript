import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function RegisterForm({ onSend, validateCPF }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [promotions, setPromotions] = useState(true);
  const [news, setNews] = useState(true);
  const [errors, setErrors] = useState({ cpf: { valid: true, text: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSend({ name, lastName, cpf, news, promotions });
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        id="name"
        label="Name"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
        id="lastName"
        label="Last Name"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event) => {
          const isValid = validateCPF(cpf);
          setErrors({ cpf: isValid });
        }}
        error={!errors.cpf.valid}
        helperText={errors.cpf.text}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promotions"
        control={
          <Switch
            checked={promotions}
            onChange={(event) => {
              setPromotions(event.target.checked);
            }}
            name="promotions"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="News"
        control={
          <Switch
            checked={news}
            onChange={(event) => {
              setNews(event.target.checked);
            }}
            name="News"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
