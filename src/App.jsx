
import './App.css'
import { AppSidebar } from './sidebar/sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Home } from './pages/Home/Home'
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import { Work } from './pages/work/Work';

function App() {


  return (
    <BrowserRouter>
    <div className='bg-slate-500 h-full inline-block '>
        <SidebarProvider>
      <AppSidebar />
      <div className='block' >
        <div className=' w-screen h-10 items-center lg:hidden md:hidden bg-slate-900 text-white flex text-xl'>
 
        <SidebarTrigger className="flex"/>
        
        <p className="flex w-100">Edward Jones</p>
  </div>
  
    <div className='flex flex-col'>
    {/* <RouterProvider router={router} /> */}
    <Routes>
        <Route
          path="*"
          element={
            <Home />
          }
        />
        <Route
          path="work"
          element={<Work />}
        />
        <Route
          path="projects"
          element={<h1 />}
        />
        <Route
          path="cpd"
          element={<h1 />}
        />
        <Route
          path="certs"
          element={<h1 />}
        />
        <Route
          path="activities"
          element={<h1 />}
        />
      </Routes>
      </div>
      </div>
      
      </SidebarProvider>

    </div>
    </BrowserRouter>
  )
}

export default App
