import React from "react";

const GoogleCalendar = () => {
  return (
    <div style={styles.container}>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=UTC&bgcolor=%23ffffff&title=Calendar&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043"
        style={styles.iframe}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  iframe: {
    border: "solid 1px #777",
  },
};

export default GoogleCalendar;