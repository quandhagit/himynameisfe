import { Button, TextField } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <div
      id="first-section"
      className="sm:px-[10%] xl:px-[20%] px-5 py-24 text-blue-950 bg-red-200"
    >
      <div>
        <div>- CONTACT</div>
        <div className="mt-3 text-2xl font-bold">Get in touch</div>
        <div className="flex flex-wrap mt-4">
          <div className="lg:w-3/5 mb-10 pr-8">
            <div>
              I'm currently avaliable to take on new projects, so feel free to
              send me a message about anything that you want to run past me. You
              can contact anytime at 24/7.
            </div>
            <div className="flex flex-col border-l-red-400 border-l-4 gap-1 border-solid border-0 px-4 mt-10 text-blue-950">
              <div>0877617200</div>
              <div>quandha1009@gmail.com</div>
              <div>36 Khue My Dong 5, Ngu Hanh Son, Danang</div>
            </div>
          </div>
          <div className="flex flex-col lg:w-2/5 w-full">
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
              <Button
                variant="contained"
                size="large"
                sx={{ mt: 2, width: 180 }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
