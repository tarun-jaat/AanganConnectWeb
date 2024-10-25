import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="flex overflow-y-scroll h-[calc(100vh-0.5rem)] overflow-hidden">
      <Navbar/>
      <Outlet />
    </div>
  );
}

export default Dashboard;
