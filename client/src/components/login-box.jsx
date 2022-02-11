import React, { useState } from "react";

import { Button, Form, Input, Checkbox, message } from "antd";
import "antd/dist/antd.css";

const LoginBox = () => {
  const [isloading, setIsLoading] = useState(false);

  const handleClick = async (email, password) => {
    setIsLoading(true);
    const result = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await result.json();
    const { token } = data;
    if (token) message.info("logged in successfully");
    console.log(data);
    setIsLoading(false);
  };

  const onFinish = (values) => {
    setIsLoading(true);
    console.log("Success:", values);
    const { username, password } = values;
    handleClick(username, password);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <h1 style={{ fontWeight: "bold" }}>WELCOME BACK</h1>
      <Form
        name="basic"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Email Address!",
            },
          ]}
        >
          <Input placeholder="Email Address" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            span: 24,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button
            htmlType="submit"
            style={{ backgroundColor: "#0a3353", color: "white" }}
            loading={isloading}
            block
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );

  // return (
  //   <div>
  //     <Button
  //       loading={isloading}
  //       onClick={handleClick}
  //       block
  //       style={{ backgroundColor: "#0a3353", color: "white" }}
  //     >
  //       Login
  //     </Button>
  //   </div>
  // );
};

export default LoginBox;
