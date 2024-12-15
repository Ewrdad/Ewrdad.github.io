import "./App.css";
import { AppSidebar } from "./sidebar/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Home } from "./pages/Home/Home";
import { HashRouter, Route, Routes } from "react-router";
import { Work } from "./pages/work/Work";
import { Certs } from "./pages/certs/Certs";
import { CPD } from "./pages/CPD/CPD";
import { Projects } from "./pages/projects/Projects";
import { Activities } from "./pages/activities/Activities";
import { Edu } from "./pages/edu/Edu";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";

function App() {
  return (
    <HashRouter>
      <div
        className="bg-slate-500 h-full w-screen inline-block bg-cover bg-center bg-no-repeat min-h-screen bg-fixed"
        style={{
          backgroundImage: `url(${
            import.meta.env.BASE_URL
          }background_glos.jpg)`,
        }}
      >
        <div className="bg-slate-400/80">
          <SidebarProvider>
            <AppSidebar />
            <div className="block">
              <div className=" w-screen h-10 items-center lg:hidden md:hidden bg-slate-900 text-white flex text-xl">
                <SidebarTrigger className="flex" />

                <p className="flex w-100">Edward Jones</p>
              </div>

              <div className="flex flex-col w-3/4 ">
                <div className="self-start w-full h-auto justify-Arou pt-5 items-left">
                  <Alert className="bg-yellow-600 border-2 border-black m-10">
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                      This website is a work in progress. All information may
                      not be accurate, and the page may not be fully functional.
                      Please check back later for updates.
                    </AlertDescription>
                  </Alert>
                  {/* <RouterProvider router={router} /> */}
                  <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="work" element={<Work />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="cpd" element={<CPD />} />
                    <Route path="certs" element={<Certs />} />
                    <Route path="activities" element={<Activities />} />
                    <Route path="edu" element={<Edu />} />
                  </Routes>
                </div>
              </div>
            </div>
          </SidebarProvider>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
