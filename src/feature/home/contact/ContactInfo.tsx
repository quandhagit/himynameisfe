import React from "react";

type ContactInfoProps = {
  phoneNumber: string;
  email: string;
  address: string;
};

const ContactInfo: React.FC<ContactInfoProps> = ({
  phoneNumber,
  email,
  address,
}) => {
  return (
    <div className="flex flex-col border-l-red-400 border-l-4 gap-1 border-solid border-0 px-4 mt-10 text-blue-950">
      <div>{phoneNumber}</div>
      <div>{email}</div>
      <div>{address}</div>
    </div>
  );
};

export default ContactInfo;
