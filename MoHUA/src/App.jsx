import React, { useState, useEffect } from "react";
import "./App.css";
import LoadingSpinner from "./components/LoadingSpinner";
import TopNavbar from "./components/TopNavbar";
import HomeContent from "./components/HomeContent";
import MiddleNavbar from "./components/MiddleNavbar";
import MainNavbar from "./components/MainNavbar";
import CarouselImage from "./components/CarouselImage";
import ScreenReaderToggle from "./components/ScreenReaderToggle";
import GoogleCalendar from "./components/GoogleCalendar";
import CarouselFooter from "./components/CarouselFooter";
import Footer from "./components/Footer";
import Latest from "./components/latext";
import Our_Strategy from "./components/Our_Strategy";
import Contact_Page from "./components/Contact_Me";

const App = () => {
  const pageStyle = {
    fontFamily: 'Arial, sans-serif', // Replace with your desired font
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div style={pageStyle}>
      {loading ? (
        <LoadingSpinner /> 
      ) : (
        <>
          {/* <ScreenReaderToggle /> */}
          <TopNavbar />
          <MiddleNavbar />
          <MainNavbar />
          <HomeContent />
          <Latest />
          <Our_Strategy />
          <CarouselImage />
          {/* <GoogleCalendar /> */}
          <Contact_Page />
          <CarouselFooter />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
