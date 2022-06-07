import React, { useEffect, useState } from "react";
import "./pages.css";

import { TabList, Tab, Widget, Tag, Table, Form } from "web3uikit";


const Home = () => {
  return (
    <>
      <div className="content">
        <TabList defaultActiveKey={1} tabStyle="bulbUnion">
          <Tab tabKey={1} tabName="DAO">
              <div className="tabContent">
                Governance Overview
                <div className="widgets">
                  <Widget
                    info={52}
                    title="Proposals Created"
                    style={{ width: "200%" }}
                  >
                    <div className="extraWidgetInfo">
                      <div className="extraTitle">Pass Rate</div>
                      <div className="progress">
                        <div
                          className="progressPercentage"
                          style={{ width: `${60}%` }}
                        ></div>
                      </div>
                    </div>
                  </Widget>
                  <Widget info={420} title="Eligible Voters" />
                  <Widget info={5} title="Ongoing Proposals" />
                </div>
              </div>
          </Tab>
          <Tab tabKey={2} tabName="Forum"></Tab>
          <Tab tabKey={3} tabName="Docs"></Tab>
        </TabList>
      </div>
    </>
  );
};

export default Home;
