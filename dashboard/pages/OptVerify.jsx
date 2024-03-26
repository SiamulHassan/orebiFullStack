import { useState } from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
// import { Alert, Space } from "antd";
import { useNavigate, useParams } from "react-router-dom";
const OptVerify = () => {
  const [loading, isLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    isLoading(true);
    await axios.post("http://localhost:8000/api/v1/auth/otpVerification", {
      otp: values.otp,
      email: params.email,
    });
    isLoading(false);
    navigate("/login");
    //console.log("data::", data);
  };
  // later include header
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Otp"
        name="otp"
        rules={[
          {
            required: true,
            message: "Please input your otp!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          disabled={loading}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OptVerify;
