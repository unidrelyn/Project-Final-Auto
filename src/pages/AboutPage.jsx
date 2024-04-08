import React from "react";
import AboutPageWide from "../assets/AboutPageWide.jpg";
import Suit from "../assets/Suit.png";
import HandshakeImage from "../assets/Handshake.png";
import KeysImage from "../assets/Keys.png";
import WhatWeDoImage from "../assets/WhatWeDo.png";
import CraftedWithPurpose from "../assets/CraftedWithPurpose.png";
import ForgedThroughPartnerships from "../assets/ForgedThroughPartnerships.png";
import GuidedByEmpathy from "../assets/GuidedByEmpathy.png";
import "../App.css"; // Import CSS file for HomePage styling

const AboutPage = () => {
  return (
    <div className="home-page-container">
      <div className="hero-container position-relative">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>

        <img
          src={AboutPageWide}
          alt="Car Image"
          className="hero-image img-fluid w-100 h-100"
          style={{ objectFit: "cover" }}
        />
        <div
          className="overlay-content position-absolute top-0 start-50 translate-middle text-center"
          style={{
            paddingTop: "200px",
            "@media (minWidth: 576px)": { paddingTop: "200px" },
          }}
        >
          <h1 className="main-heading">About Us</h1>
        </div>
      </div>

      <div className="container">
        <div className="col-md-1 mt-4">
          <img src={WhatWeDoImage} alt="What We Do" />
        </div>
        <div className="row">
          <div className="col">
            <p className="text-start m-0 px-3 py-2">
              <span className="text-success-subtle fs-6 fw-normal font-family-Inter">
                At AutoExchange, we're revolutionizing the car buying experience
                to match the preferences of modern consumers: adaptable,
                accessible, and tailored to their individual needs. We achieve
                this by facilitating seamless connections between buyers and
                dealers through our cutting-edge technology platform, offering
                unparalleled access, extensive options, and enhanced control at
                every stage, from exploration to delivery.
              </span>
            </p>
          </div>
        </div>
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

        <div className="row-md-4">
          <div className="row">
            <div className="col-md-6 m-4">
              <img src={Suit} alt="Suit" className="w-100" />
            </div>
            <div className="col-md-4 pt-5 text-start">
              <img src={CraftedWithPurpose} alt="What We Do" />
              <p className="d-flex end h-100 mt-auto">
                Experience the satisfaction of taking charge. Here at
                AutoExchange, we empower both car buyers and sellers with the
                tools they need for a personalized journey from beginning to
                end. With the freedom to browse on their terms, our users can
                discover the perfect vehicle to complement their lifestyle and
                budget from our vast selection of quality cars. Start exploring.
              </p>
            </div>
          </div>
        </div>

        <div className="row-md-4">
          <div className="row">
            <div className="col-md-6 m-4">
              <img src={HandshakeImage} alt="Handshake" className="w-100" />
            </div>
            <div className="col-md-4 pt-5 text-start">
              <img src={ForgedThroughPartnerships} alt="What We Do" />
              <p className="d-flex end h-100 mt-auto">
                Our foundation is built on relationships, and we take pride in
                the connections we've cultivated. From our network of over
                10,000 Certified Dealers across the country to our
                collaborations with renowned brands, we're committed to driving
                success through strategic partnerships that empower our users
                and elevate their car buying experience.
              </p>
            </div>
          </div>
        </div>
        <div className="row-md-4">
          <div className="row">
            <div className="col-md-6 m-4">
              <img src={KeysImage} alt="Keys" className="w-100" />
            </div>
            <div className="col-md-4 pt-5 text-start">
              <img src={GuidedByEmpathy} alt="What We Do" />
              <p className="d-flex end h-100 mt-auto">
                Guided By Empathy. People are the heart of our mission.
                Recognizing the significance of cars in daily life, we're
                dedicated to supporting every member of our community -
                consumers, dealers, and our esteemed military personnel - in
                achieving their objectives with utmost ease and efficiency. At
                AutoExchange, we prioritize humanity above all else. Discover
                more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
