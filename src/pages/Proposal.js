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

          <div className="proposalOverview">
            <Tag color={"red"} text={"Rejected"} />
            <div className="proposer">
              <span>Proposed By </span>
              <Tooltip content={"0xe276941FBd5f936E677dB9B6eEE8212a3b268C5E"}>
                <Blockie seed={"0xe276941FBd5f936E677dB9B6eEE8212a3b268C5E"} />
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="widgets">
          <Widget info={30} title="Votes For">
            <div className="extraWidgetInfo">
              <div className="extraTitle">{77}%</div>
              <div className="progress">
                <div
                  className="progressPercentage"
                  style={{ width: `${77}%` }}
                ></div>
              </div>
            </div>
          </Widget>
          <Widget info={10} title="Votes Against">
            <div className="extraWidgetInfo">
              <div className="extraTitle">{23}%</div>
              <div className="progress">
                <div
                  className="progressPercentage"
                  style={{ width: `${23}%` }}
                ></div>
              </div>
            </div>
          </Widget>
        </div>
      </div>
    </>
  );
};

export default Proposal;
