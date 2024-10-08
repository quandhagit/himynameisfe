import Link from "next/link";
import React from "react";

const AppLogo: React.FC = () => {
  return (
    <Link className="text-3xl font-bold mr-2 no-underline" href={"/"}>
      <div className="text-red-700 font-mono">
        Hi
        <span className="text-white bg-red-700 px-3 rounded">MyNameIs</span>
      </div>
    </Link>
  );
};

export default AppLogo;
