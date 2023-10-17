import React from "react";
import { Button, TextField } from "@mui/material";

const ContactInputs = () => {
  return (
    <div className="flex flex-col">
      <TextField id="outlined-multiline-flexible" label="Your Name" />
      <TextField
        id="outlined-multiline-flexible"
        label="Your Email"
        sx={{ mt: 2 }}
      />
      <TextField
        id="outlined-multiline-static"
        label="What you want to say"
        multiline
        rows={4}
        sx={{ mt: 2 }}
      />
      <Button variant="contained" size="large" sx={{ mt: 2, width: 180 }}>
        Submit
      </Button>
    </div>
  );
};

export default ContactInputs;
