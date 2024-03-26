import { useState } from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { Alert, Space } from "antd";
import { useNavigate } from "react-router-dom";
// import { CloseSquareFilled } from "@ant-design/icons";
const Registration = () => {
  const [loading, isLoading] = useState(false);
  const [msg, setMsg] = useState();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      isLoading(true);
      const data = await axios.post(
        "http://localhost:8000/api/v1/auth/registration",
        {
          name: values.username,
          email: values.email,
          password: values.password,
        }
      );
      // isLoading(false);
      setMsg("Registration done check mail for opt verification");
      console.log("data::", data);
      setTimeout(() => {
        // go email verify page
        // go otp verify page
        // navigate(`/optVerify/${values.email}`);
      }, 2000);
      // navigate(`/optVerify/${values.email}`);
    } catch (error) {
      ///console.log("err:", error.message);
    } finally {
      isLoading(false);
    }
  };

  return (
    <>
      {msg && (
        <Space direction="vertical" style={{ width: "50%" }}>
          <Alert message={msg} type="success" closable />
        </Space>
      )}
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
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
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
    </>
  );
};

export default Registration;
