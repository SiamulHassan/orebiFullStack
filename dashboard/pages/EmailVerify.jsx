import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const EmailVerify = () => {
  const params = useParams();
  const navigate = useNavigate();
  // console.log("paramsToken:", params);
  useEffect(() => {
    async function sendToken() {
      await axios.post("http://localhost:8000/api/v1/auth/emailVerify", {
        token: params.token,
      });
      navigate("/login");
    }
    sendToken();
  }, [params.token, navigate]);
  return <div>email verfing...</div>;
};

export default EmailVerify;

// const onFinish = async (values) => {
//   isLoading(true);
//   await axios.post("http://localhost:8000/api/v1/auth/otpVerification", {
//     otp: values.otp,
//     email: params.email,
//   });
//   isLoading(false);
//   navigate("/login");
//   //console.log("data::", data);
// };
