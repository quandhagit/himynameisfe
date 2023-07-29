"use client";

import React, { useEffect } from "react";

const MyProfile: React.FC = () => {
  useEffect(() => {
    fetch("/api/posts", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div>MyProfile</div>;
};

export default MyProfile;
