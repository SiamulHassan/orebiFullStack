import { useState } from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loading, isLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      //http://localhost:8000/api/v1/auth/registration
      isLoading(true);
      await axios.post("http://localhost:8000/api/v1/auth/login", {
        email: values.email,
        password: values.password,
      });
      // isLoading(false);
      //console.log("data::", data);
      isLoading(false);
      navigate("/dashboard");
    } catch (error) {
      // console.log("err:", error.message);
    } finally {
      isLoading(false);
    }
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
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
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

export default Login;
