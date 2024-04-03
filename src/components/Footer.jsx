import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <section style={sectionStyle}>
          <h4>About Us</h4>
          <p>Learn more about our mission and services.</p>
        </section>
        <section style={sectionStyle}>
          <h4>Contact</h4>
          <p>Have questions? Reach out to us.</p>
        </section>
        <section style={sectionStyle}>
          <h4>Follow Us</h4>
          <p>Stay updated with our latest news.</p>
          {/* Social media icons can go here */}
        </section>
      </div>
      <div style={copyRightStyle}>
        © {new Date().getFullYear()} Auto Exchange. All rights reserved.
      </div>
    </footer>
  );
}

// Example inline styles, adjust as needed
const footerStyle = {
  background: '#333',
  color: '#fff',
  padding: '20px 0',
  fontSize: '14px',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '0 10%',
};

const sectionStyle = {
  margin: '0 20px',
};

const copyRightStyle = {
  textAlign: 'center',
  marginTop: '20px',
};

export default Footer;