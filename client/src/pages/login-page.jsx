import React from "react";
import { Card, Image } from "antd";

import LoginBox from "../components/login-box";

import "./pages.scss";

const LoginPage = () => {
  return (
    <div className="login-page-container">
      <div className="login-box">
        <LoginBox />
      </div>

      <div className="bg-image"></div>
    </div>
  );
};

export default LoginPage;
