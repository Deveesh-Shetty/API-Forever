import React from "react";
import Dictionary from "../Components/Dictionary/Dictionary";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

function DictionaryPage() {
  document.title = "API Forever - Dictionary";
  return (
    <>
      <Navbar />
      <Sidebar />
      <Dictionary />
    </>
  );
}

export default DictionaryPage;
