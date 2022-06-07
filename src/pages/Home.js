import React, { useEffect, useState } from "react";
import "./pages.css";

import { TabList, Tab, Widget, Tag, Table, Form } from "web3uikit";



const Home = () => {
 

  

 

  return (
    <>
      <div className="content">
        <TabList defaultActiveKey={1} tabStyle="bulbUnion">
          <Tab tabKey={1} tabName="DAO">
          </Tab>
          <Tab tabKey={2} tabName="Forum"></Tab>
          <Tab tabKey={3} tabName="Docs"></Tab>
        </TabList>
      </div>
    </>
  );
};

export default Home;
