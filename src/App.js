import "./App.css";
import * as React from "react";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

export default function App() {

  return (
    <div className="app">
      <TextField id="outlined-basic" label="Name" variant="outlined" /><br/>
      <TextField id="outlined-basic" label="Mobile" variant="outlined" /><br/>
      <TextField id="outlined-basic" label="Age" variant="outlined" /><br/>
      <TextField id="outlined-basic" label="Country" variant="outlined" /><br/>
      <TextField id="outlined-basic" label="State" variant="outlined" /><br/>
      <TextField id="outlined-basic" label="City" variant="outlined" /><br/>
      <Button variant="contained" >SUBMIT</Button>
    </div>
  );
}
