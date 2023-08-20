"use client";
import React, { useState } from "react";
import Link from "next/link";

// layout for page

import Auth from "../../../layouts/Auth";
import AuthNavbar from "../../../components/Navbars/AuthNavbar";
import OtpInput from "@/components/Inputs/OtpInput";
import "../../../styles/background.css";

export default function VerifyOTP() {
  const [otp, setOtp] = useState("");
  const onChangeOtp = (value: string): void => {
    setOtp(value);
  };

  const background = "custom-background";

  return (
    <>
      <AuthNavbar />

      <div
        className={`flex min-h-screen flex-col justify-center overflow-hidden ${background}`}
      >
        <div className="w-1/2 mx-auto mb-12 bg-white rounded-lg shadow-md">
          <div className="bg-white h-auto py-6 rounded text-center">
            <h1 className="text-2xl font-bold">OTP Verification</h1>
            <div className="flex flex-col mt-4">
              <span>Enter the OTP you received at</span>
              <span className="font-bold">+91 ******876</span>
            </div>

            <OtpInput value={otp} valueLength={6} onChange={onChangeOtp} />

            <div className="flex justify-center text-center mt-5">
              <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                <span className="font-bold">Resend OTP</span>
                <i className="bx bx-caret-right ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
