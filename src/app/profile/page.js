"use client";
import React from "react";
import ProtectedRoute from "@/components/app/ProtectedRoute";
import ProfileComponent from "@/components/ui/ProfileComponent";

const Profile = () => {
  return (
    <ProtectedRoute>
      <ProfileComponent />
    </ProtectedRoute>
  );
};

export default Profile;
