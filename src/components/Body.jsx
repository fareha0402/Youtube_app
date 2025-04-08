import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router";
import Header from "./Header";

const Body = () => {
  return (
    <>
      <Header />
      <div className="grid grid-flow-col">
        <Sidebar className="col-span-2" />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
