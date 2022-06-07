import React, { useState, useEffect } from "react";
import "./pages.css";

import { Tag, Widget, Blockie, Tooltip, Icon, Form, Table } from "web3uikit";
import { Link } from "react-router-dom"; // to route back to home page

const Proposal = () => {

  return (
    <>
      <div className="contentProposal">
        <div className="proposal">
          <Link to="/">
            <div className="backHome">
              <Icon fill="#ffffff" size={20} svg="chevronLeft" />
              Overview
            </div>
          </Link>
          <div>g3p for web3 moralis king pin of the month?</div>
        </div>
      </div>
    </>
  );
};

export default Proposal;
