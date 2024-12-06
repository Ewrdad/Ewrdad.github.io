
import './App.css'
import {Button} from '@/components/ui/button'
import { AppSidebar } from './sidebar/sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Home } from './pages/Home/Home'

function App() {

  return (
    <div className='bg-slate-500 h-full w-full'>
        <SidebarProvider>

    <AppSidebar />
      <Home />
      </SidebarProvider>

    </div>
  )
}

export default App
