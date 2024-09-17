import React from 'react'
import TopNavbar from '../../components/TopNavbar'
import MiddleNavbar from '../../components/MiddleNavbar'
import Sidebar_Contractor from '../../components/Contractor/Sidebar_Contractor'
import MainNavbar_Contractor from '../../components/Contractor/Mainbar_Contractor'
import { Link } from 'react-router-dom'
function Contractor_Projects() {
  return (
    <>
    <TopNavbar/>
    <MiddleNavbar />
    <MainNavbar_Contractor />
    <Sidebar_Contractor />
    <main className="grid flex-1 flex-col items-start p-4 " style={{ position: 'absolute', top: '180px', left: '350px' }}>
      <br />
      <br />
        <div className="p-6">
              <div className="">
                <table className="caption-bottom text-center text-sm">
                  <thead className="[&amp;_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Task
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        Department
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        Status
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                        Start Date
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                        End Date
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        All Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&amp;_tr:last-child]:border-0">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                        <Link to={`/admin/project_details?id=${123}`} >Delhi-Mumbai Expressway</Link>
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        Ministry of Road Transport and Highways (MoRTH)
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        <div
                          className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                          data-v0-t="badge"
                        >
                          Ongoing
                        </div>
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                        2024-01-01
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                        2029-01-01
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <Link to={`/admin/project_details?id=${123}`} className='text-indigo-600'>View</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
    </main>
    </>
  )
}

export default Contractor_Projects