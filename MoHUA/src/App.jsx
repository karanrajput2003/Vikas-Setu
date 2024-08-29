import './App.css'
import TopNavbar from './components/TopNavbar'
import HomeContent from './components/HomeContent'
import MiddleNavbar from './components/MiddleNavbar'
import MainNavbar from './components/MainNavbar'
import GoogleCalendar from "./components/GoogleCalendar";
import CarouselFooter from './components/CarouselFooter'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <TopNavbar />
      <MiddleNavbar />
      <MainNavbar />
      <HomeContent />
      <GoogleCalendar />
      <CarouselFooter />
      <Footer /> 
    </>
  )
}

export default App
