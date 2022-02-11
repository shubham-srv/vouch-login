import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./header.scss";

import { Button } from "antd";

const HeaderSection = () => {
  const history = useHistory();

  const handleClick = () => {
    console.log("clicking");
    history.push("/login");
  };

  return (
    <div className="header-container">
      <div className="logo">
        <Link to="/">
          <h1>Vouch</h1>
        </Link>
      </div>
      <div>
        <Button className="free-trial-button" type="primary">
          Start free Trial
        </Button>

        <Button className="to-login-page" onClick={handleClick} type="primary">
          Login
        </Button>
      </div>
    </div>
  );
};

export default HeaderSection;
