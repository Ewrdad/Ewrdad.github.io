import "./App.css";
import { AppSidebar } from "./sidebar/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Home } from "./pages/Home/Home";
import { Route, Routes, useLocation } from "react-router";
import { Work } from "./pages/work/Work";
import { Certs } from "./pages/certs/Certs";
import { CPD } from "./pages/CPD/CPD";
import { Projects } from "./pages/projects/Projects";
import { Activities } from "./pages/activities/Activities";
import { Edu } from "./pages/edu/Edu";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { Resources } from "./pages/Resources/Resources";
import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const location = useLocation();
  const [backgroundImage, setBackgroundImage] = useState("background_glos.jpg");

  useEffect(() => {
    const backgroundImages = [
      "background_glos.jpg",
      "bg_usw.jpg",
      "bg_cardiff.jpg",
      "bg_abingdon.jpg",
      "bg_grad.jpg",
      "bg_prid.jpg",
    ];

    //Picks a random background image
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setBackgroundImage(backgroundImages[randomIndex]);
  }, [location.pathname]);

  return (
    <>
      <div
        className="bg-slate-500 h-full w-screen inline-block bg-cover bg-center bg-no-repeat min-h-screen bg-fixed ease-in-out transition-all duration-1000"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}${backgroundImage})`,
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
                      <p>
                        This website is a work in progress. All information may
                        not be 100% accurate, and the page may not be fully
                        functional. Please check back later for updates.
                      </p>

                      <a
                        href="https://forms.gle/9GJrseQwnfifaHVSA"
                        target="_blank"
                        rel="noreferrer"
                        className=""
                      >
                        <Button className="w-full mt-5">
                          Got feedback? Let me know! :
                          https://forms.gle/9GJrseQwnfifaHVSA
                        </Button>
                      </a>
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
                    <Route path="resources" element={<Resources />} />
                  </Routes>
                </div>
              </div>
            </div>
          </SidebarProvider>
        </div>
      </div>
    </>
  );
}

export default App;
