import React, { useState, useEffect } from "react";
import "./App.css";
import LoadingSpinner from "./components/LoadingSpinner";
import TopNavbar from "./components/TopNavbar";
import HomeContent from "./components/HomeContent";
import MiddleNavbar from "./components/MiddleNavbar";
import MainNavbar from "./components/MainNavbar";
import ScreenReaderToggle from "./components/ScreenReaderToggle";
import GoogleCalendar from "./components/GoogleCalendar";
import CarouselFooter from "./components/CarouselFooter";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner /> 
      ) : (
        <>
          {/* <ScreenReaderToggle /> */}
          <TopNavbar />
          <MiddleNavbar />
          <MainNavbar />
          <HomeContent />
          <GoogleCalendar />
          <CarouselFooter />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
