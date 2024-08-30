import React from 'react'
import TopNavbar from '../../components/TopNavbar'
import MiddleNavbar from '../../components/MiddleNavbar'
import Project_Department from '../../components/Department/Project_Department'
import Sidebar_Department from '../../components/Department/Sidebar_Department'

function Department_Project() {
  return (
    <>
        <TopNavbar />
        <MiddleNavbar />
        <Sidebar_Department />
        <Project_Department />
    </>
  )
}

export default Department_Project