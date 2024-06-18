"use client";
import React, { useEffect, useState } from "react";
import { instance } from "@/app/axios/Api";

function UserDetails() {
  const [userDetails, setUserDetails] = useState({});
  console.log(userDetails);

  useEffect(() => {
    async function getDetails() {
      try {
        const res = await instance.get("/users/profiles/my");
        // console.log(res.data);
        setUserDetails(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getDetails();
  }, []);
  return (
    <div className="mx-10 mt-12 ">
      <p className="text-black text-2xl font-bold">Personal Information</p>
      <p className="mt-5 text-lg">
        {" "}
        <span>Name:</span>
        {userDetails.full_name}
      </p>
      <div className="mt-5">
        <p>
          <span>Email:</span>
          {userDetails.email}
        </p>
      </div>
    </div>
  );
}

export default UserDetails;
