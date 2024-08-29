import React from 'react'
import { Link } from 'react-router-dom'

function Project_Admin() {
  return (
    <main class="grid flex-1 flex-col items-start p-4 " style={{ position: 'absolute', top: '180px', left: '100px' }}>
        <div class="p-6">
              <div class="">
                <table class="w-full caption-bottom text-sm">
                  <thead class="[&amp;_tr]:border-b">
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Project
                      </th>
                      <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        Department
                      </th>
                      <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        Status
                      </th>
                      <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                        Start Date
                      </th>
                      <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                        End Date
                      </th>
                      <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody class="[&amp;_tr:last-child]:border-0">
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                        <Link to={`/admin/project_details?id=${123}`} >Road Repair and Maintenance</Link>
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        Public Works
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        <div
                          class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                          data-v0-t="badge"
                        >
                          Ongoing
                        </div>
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                        2023-04-01
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                        2023-09-30
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <button
                          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                          aria-haspopup="true"
                          type="button"
                          id="radix-:r17:"
                          aria-expanded="false"
                          data-state="closed"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-4 w-4"
                          >
                            <polyline points="18 8 22 12 18 16"></polyline>
                            <polyline points="6 8 2 12 6 16"></polyline>
                            <line x1="2" x2="22" y1="12" y2="12"></line>
                          </svg>
                          <span class="sr-only">Toggle menu</span>
                        </button>
                      </td>
                    </tr>
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                        <Link to={`/admin/project_details?id=${153}`} >Park Renovation and Landscaping</Link>
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        Parks and Recreation
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        <div
                          class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                          data-v0-t="badge"
                        >
                          Upcoming
                        </div>
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                        2023-07-01
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                        2024-06-30
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <button
                          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                          aria-haspopup="true"
                          type="button"
                          id="radix-:r19:"
                          aria-expanded="false"
                          data-state="closed"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-4 w-4"
                          >
                            <polyline points="18 8 22 12 18 16"></polyline>
                            <polyline points="6 8 2 12 6 16"></polyline>
                            <line x1="2" x2="22" y1="12" y2="12"></line>
                          </svg>
                          <span class="sr-only">Toggle menu</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
    </main>
  )
}

export default Project_Admin