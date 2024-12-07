
import './App.css'
import { AppSidebar } from './sidebar/sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Home } from './pages/Home/Home'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router";
import { Work } from './pages/work/Work';
import { Certs } from './pages/certs/Certs';
import { CPD } from './pages/CPD/CPD'
import { Projects } from './pages/projects/Projects';
import { Activities } from './pages/activities/Activities';
import { Edu } from './pages/edu/Edu';

function App() {


  return (
  
    <BrowserRouter>
    <div className='bg-slate-500 h-full inline-block bg-cover bg-center bg-no-repeat min-h-screen bg-fixed'
    style={{ backgroundImage: `url(${import.meta.env.BASE_URL}background_glos.jpg)` }}>
        <SidebarProvider>
      <AppSidebar />
      <div className='block' >
        <div className=' w-screen h-10 items-center lg:hidden md:hidden bg-slate-900 text-white flex text-xl'>
 
        <SidebarTrigger className="flex"/>
        
        <p className="flex w-100">Edward Jones</p>
  </div>
  
    <div className='flex flex-col'>
    <div className="self-start w-3/4 h-auto justify-between pt-5 items-left">

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
          element={<Projects />}
        />
        <Route
          path="cpd"
          element={<CPD />}
        />
        <Route
          path="certs"
          element={<Certs />}
        />
        <Route
          path="activities"
          element={<Activities />}
        />
          <Route
          path="edu"
          element={<Edu />}
        />
      </Routes>
      </div>
      </div>
      </div>
      
      </SidebarProvider>

    </div>
    </BrowserRouter>
  )
}

export default App
