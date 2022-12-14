import Navbar from "../Components/Navbar/Navbar";
import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Pincode from "../Components/Pincode/Pincode";

function PincodePage() {
  document.title = "API Forever - Pincode";
  return (
    <>
      <Navbar />
      <Sidebar />
      <Pincode />
    </>
  );
}

export default PincodePage;
