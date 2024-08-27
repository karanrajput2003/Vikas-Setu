import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.left}>
          <p>
            &copy; {new Date().getFullYear()} Vikas Setu. All rights
            reserved.
          </p>
        </div>
        <div style={styles.right}>
          <a href="/privacy-policy" style={styles.link}>
            Privacy Policy
          </a>
          <a href="/terms-of-service" style={styles.link}>
            Terms of Service
          </a>
          <a href="/contact" style={styles.link}>
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#f8f9fa",
    padding: "20px 0",
    textAlign: "center",
    borderTop: "1px solid #eaeaea",
    position: "relative",
    bottom: "0",
    width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  left: {
    flex: 1,
    textAlign: "left",
  },
  right: {
    flex: 1,
    textAlign: "right",
  },
  link: {
    marginLeft: "15px",
    color: "#007bff",
    textDecoration: "none",
  },
};

export default Footer;
