import Image from "next/image";
import React from "react";
import avatar from "../../../../public/images/avatar.png";

const Avatar = () => {
  return (
    <div>
      <Image
        src={avatar}
        alt="q"
        width={450}
        height={450}
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default Avatar;
