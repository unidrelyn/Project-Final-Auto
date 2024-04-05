import React from "react";

const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Our car marketplace is dedicated to bringing car buyers and sellers
        together in a convenient and user-friendly platform.
      </p>
      {/* Additional information about your marketplace */}
      {/* Dark/Light Mode Switch */}
      <div className="form-check form-switch position-fixed bottom-0 end-0 m-4">
        <input
          className="form-check-input p-2"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          defaultChecked
          onClick={myFunction}
        />
      </div>
    </div>
  );
};

export default AboutPage;
