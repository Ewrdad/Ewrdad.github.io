import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from '@/components/ui/button'
import { AppSidebar } from './sidebar/sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Home } from './pages/Home/Home'

function App() {

  return (
    <>
        <SidebarProvider>

    <AppSidebar />
      <Home />
      </SidebarProvider>

    </>
  )
}

export default App
