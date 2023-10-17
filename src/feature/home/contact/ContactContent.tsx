import React from "react";
import ContactInfo from "./ContactInfo";

const data = {
  contactContent:
    "I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7.",
  phoneNumber: "0877617200",
  email: "quandha1009@gmail.com",
  address: "36 Khue My Dong 5, Ngu Hanh Son, Danang",
};

const ContactContent = () => {
  return (
    <div>
      <div>{data.contactContent}</div>
      <ContactInfo
        phoneNumber={data.phoneNumber}
        email={data.email}
        address={data.address}
      />
    </div>
  );
};

export default ContactContent;
