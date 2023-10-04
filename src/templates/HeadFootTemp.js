import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
const Template = (props) => {
  return (
    <>
      <div>
        <Navbar />
        <div>{props.childern}</div>
        <Footer />
      </div>
    </>
  );
};

export default Template;
