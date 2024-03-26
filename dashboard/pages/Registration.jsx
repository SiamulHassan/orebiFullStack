import { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import axios from "axios";
import { Alert, Space } from "antd";
// import { useNavigate } from "react-router-dom";
// import { CloseSquareFilled } from "@ant-design/icons";
const Registration = () => {
  const [open, setOpen] = useState(false);
  const [resendMail, setResendMail] = useState("");
  const [loading, isLoading] = useState(false);
  const [msg, setMsg] = useState();
  // const navigate = useNavigate();
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
      // navigate(`/optVerify/${values.email}`);
    } catch (error) {
      ///console.log("err:", error.message);
    } finally {
      isLoading(false);
    }
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleResend = async () => {
    if (!resendMail) return;
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/auth/resendMail",
        {
          email: resendMail,
        }
      );

      if (data.status === "success") {
        setMsg("Verification link was resent, check mail");
        setOpen(false);
      }
    } catch (error) {
      setMsg(error.response.data.message);
      setOpen(false);
      // console.log("err:", error.response.data.message);
    }
  };

  return (
    <>
      {msg && (
        <Space
          direction="vertical"
          style={{ width: "15%", margin: "10px", marginLeft: "40%" }}
        >
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
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              disabled={loading}
            >
              Submit
            </Button>
            <Button type="default" onClick={showModal}>
              Resend
            </Button>
            <Modal
              open={open}
              title="Resend Verification Link"
              footer={() => (
                <>
                  <Button onClick={handleResend}>Send</Button>
                </>
              )}
            >
              <Form.Item
                label="Email"
                name="resendEmail"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  value={resendMail}
                  onChange={(e) => setResendMail(e.target.value)}
                />
              </Form.Item>
            </Modal>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default Registration;
