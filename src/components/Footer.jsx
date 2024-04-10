import React from "react";

function Footer() {
  return (
    <footer className="-fixed-bottom" style={footerStyle}>
      <div style={copyRightStyle}>
        © {new Date().getFullYear()} Auto Exchange. All rights reserved.
      </div>
    </footer>
  );
}

// Example inline styles, adjust as needed
const footerStyle = {
  background: "var( --ae-gray-900)",
  color: "#fff",
  padding: "20px 0",
  fontSize: "14px",
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-around",
  padding: "0 10%",
};

const sectionStyle = {
  margin: "0 20px",
};

const copyRightStyle = {
  textAlign: "center",
  marginTop: "20px",
};

export default Footer;
