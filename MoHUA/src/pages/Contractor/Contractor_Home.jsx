import React from 'react'
import TopNavbar from '../../components/TopNavbar'
import MiddleNavbar from '../../components/MiddleNavbar'
import Sidebar_Contractor from '../../components/Contractor/Sidebar_Contractor'
import MainNavbar_Contractor from '../../components/Contractor/Mainbar_Contractor'
function Contractor_Home() {
  return (
    <>
    <TopNavbar/>
    <MiddleNavbar />
    <MainNavbar_Contractor />
    <Sidebar_Contractor />
    </>
  )
}

export default Contractor_Home