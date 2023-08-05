"use client";
import React from "react";

// components

import CardSettings from "../../../components/Cards/CardSettings.js";
import CardProfile from "../../../components/Cards/CardProfile.js";

// layout for page

import Admin from "../../../layouts/Admin.js";

export default function Settings() {
  return (
    <>
     <Admin>
       <div className="flex flex-wrap">
        <div className="flex justify-center items-center px-4 lg:w-48">
          <CardSettings />
        </div>
      </div>
     </Admin>
    </>
  );
}

