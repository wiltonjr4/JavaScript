import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DeliveryData({ onSend }) {
  const [cep, setCep] = useState("");
  const [adress, setAdress] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSend({ cep, adress, number, state, city });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={adress}
        onChange={(event) => {
          setAdress(event.target.value);
        }}
        id="adress"
        label="Adress"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
        id="number"
        label="Number"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={state}
        onChange={(event) => {
          setState(event.target.value);
        }}
        id="state"
        label="State"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
        id="city"
        label="City"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finish Register
      </Button>
    </form>
  );
}

export default DeliveryData;
