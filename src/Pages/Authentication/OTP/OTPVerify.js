import React, { useState } from "react";
import { InputOtp } from "primereact/inputotp";
import Header from "../../../Components/Header/Header";

const OTPVerify = () => {
  const [token, setTokens] = useState();

  return (
    <>
      <Header />
      <div className="trainers-login otp-verify">
        <div className="trainers-login-form">
          <h1>Please Enter OTP sent on your Email</h1>
          <div className="otp-block">
            <InputOtp
              value={token}
              onChange={(e) => setTokens(e.value)}
              integerOnly
            />
            <button type="submit" className="btn gold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTPVerify;
