import React from 'react'
import { Link } from 'react-router-dom'

function Task_Header_Admin() {
  return (
    <header class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6" style={{ position: 'absolute', top: '180px', left: '120px' }}>
              <div class="flex items-center">
          <div class="ml-auto flex items-center gap-2">
            <Link to='/admin/addtask' class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-3 h-8 gap-1">
              <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">+ Add Task</span>
            </Link >
          </div>
        </div>
    </header>

  )
}

export default Task_Header_Admin