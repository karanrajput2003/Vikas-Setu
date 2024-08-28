import React from 'react'
import TopNavbar from '../../components/TopNavbar'
import MiddleNavbar from '../../components/MiddleNavbar'
import Sidebar_Admin from '../../components/CentralAdmin/Sidebar_Admin'
import Header_Admin from '../../components/CentralAdmin/Header_Admin'
import Project_Admin from '../../components/CentralAdmin/Project_Admin'

function Admin_Project() {
  return (
    <>
        <TopNavbar />
        <MiddleNavbar />
        <Sidebar_Admin />
        <Header_Admin />
        <Project_Admin />
    </>
  )
}

export default Admin_Project