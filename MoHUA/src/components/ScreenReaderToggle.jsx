import React, { useState } from "react";

const ScreenReaderToggle = () => {
  const [screenReaderEnabled, setScreenReaderEnabled] = useState(false);

  const handleScreenReaderToggle = (e) => {
    e.preventDefault();
    setScreenReaderEnabled(!screenReaderEnabled);
    if (!screenReaderEnabled) {
      // If enabling, set focus to the first interactive element
      const firstInteractiveElement = document.querySelector(
        "button, a, input, select, textarea"
      );
      if (firstInteractiveElement) {
        firstInteractiveElement.focus();
      }
    }
  };

  return (
    <a
      href="#"
      onClick={handleScreenReaderToggle}
      aria-pressed={screenReaderEnabled}
      aria-label="Toggle screen reader mode"
      style={styles.link}
    >
      {screenReaderEnabled ? "Disable Screen Reader" : "Enable Screen Reader"}
    </a>
  );
};

const styles = {
  link: {
    textDecoration: "none",
    color: "#007bff",
    cursor: "pointer",
  },
};

export default ScreenReaderToggle;
