import "./App.css";
import { AppSidebar } from "./sidebar/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Home } from "./pages/Home/Home";
import { Route, Routes, useLocation, useNavigate } from "react-router";
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

const BACKGROUND_IMAGES = [
  "background_glos.jpg",
  "bg_usw.jpg",
  "bg_cardiff.jpg",
  "bg_abingdon.jpg",
  "bg_grad.jpg",
  "bg_prid.jpg",
];

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState(BACKGROUND_IMAGES[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * BACKGROUND_IMAGES.length);
    setBackgroundImage(BACKGROUND_IMAGES[randomIndex]);
  }, [location.pathname]);

  useEffect(() => {
    if (
      !location.hash &&
      typeof window !== "undefined" &&
      typeof window.scrollTo === "function"
    ) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div
      className="min-h-screen w-full overflow-x-clip bg-slate-500 bg-cover bg-center bg-no-repeat md:bg-fixed ease-in-out transition-all duration-1000"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}${backgroundImage})`,
      }}
    >
      <div className="min-h-screen w-full bg-slate-400/80">
        <SidebarProvider>
          <AppSidebar />
          <div className="flex flex-1 flex-col min-w-0 w-full">
            <header className="sticky top-0 z-30 flex h-14 w-full items-center gap-3 bg-slate-900/95 backdrop-blur px-3 text-white shadow-sm md:hidden">
              <SidebarTrigger className="h-11 w-11 text-white hover:bg-slate-800 hover:text-white" />
              <button
                type="button"
                onClick={() => navigate("/")}
                className="text-lg font-semibold truncate text-left hover:text-slate-200"
              >
                Edward Jones
              </button>
            </header>

            <main className="flex-1 w-full max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
              <Alert className="bg-yellow-600 border-2 border-black mb-6">
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  <p>
                    This website is a work in progress. All information may not
                    be 100% accurate, and the page may not be fully functional.
                    Please check back later for updates.
                  </p>

                  <Button
                    asChild
                    className="mt-4 w-full whitespace-normal h-auto py-2.5 text-center"
                  >
                    <a
                      href="https://forms.gle/9GJrseQwnfifaHVSA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Got feedback? Let me know!
                    </a>
                  </Button>
                </AlertDescription>
              </Alert>

              <ErrorBoundary
                resetKey={location.pathname}
                onReset={() => navigate("/")}
              >
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
              </ErrorBoundary>
            </main>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}

export default App;
