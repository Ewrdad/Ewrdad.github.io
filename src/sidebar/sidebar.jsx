import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  useSidebar,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router";

export function AppSidebar() {
  const navigate = useNavigate();
  const { isMobile, setOpenMobile } = useSidebar();

  const closeMobile = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  const handleNavigate = (to) => {
    navigate(to);
    closeMobile();
  };

  return (
    <Sidebar className="h-full">
      <SidebarHeader className="border-b-2 pr-10 md:pr-2">
        {
          // MARK: Top
        }
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => handleNavigate("/")}>
              Edward Jones
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {
        // MARK: Work
      }
      <SidebarContent className="px-2 py-2">
        <SidebarGroupLabel asChild>
          <button
            type="button"
            className="w-full cursor-pointer text-left hover:text-sidebar-foreground"
            onClick={() => handleNavigate("/work")}
          >
            Work
          </button>
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => handleNavigate("/work#raytheon")}
              >
                Raytheon (2022 - Present)
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => handleNavigate("/work#ukaea")}>
                UKAEA (2020 - 2021)
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>

        {
          // MARK: Certs
        }
        <SidebarGroupLabel asChild>
          <button
            type="button"
            className="w-full cursor-pointer text-left hover:text-sidebar-foreground"
            onClick={() => handleNavigate("/certs")}
          >
            Certifcations
          </button>
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => handleNavigate("/certs#aws")}>
                AWS
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => handleNavigate("/certs#comptia")}
              >
                CompTIA
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => handleNavigate("/certs#azure")}>
                Azure
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>

        {
          // MARK: CPD
        }
        <SidebarGroupLabel asChild>
          <button
            type="button"
            className="w-full cursor-pointer text-left hover:text-sidebar-foreground"
            onClick={() => handleNavigate("/cpd")}
          >
            Proffesional Development
          </button>
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => handleNavigate("/cpd#bcs")}>
                BCS Membership
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => handleNavigate("/cpd#online")}>
                Online Training
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>

        {
          // MARK: Projects
        }
        <SidebarGroupLabel asChild>
          <button
            type="button"
            className="w-full cursor-pointer text-left hover:text-sidebar-foreground"
            onClick={() => handleNavigate("/projects")}
          >
            Projects
          </button>
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => handleNavigate("/projects#portfolio")}
              >
                Portfolio
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => handleNavigate("/projects#jsusedocs")}
              >
                JsUseDocs
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => handleNavigate("/projects#livequery")}
              >
                LiveQuery
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>

        {
          // MARK: Education
        }
        <SidebarGroupLabel asChild>
          <button
            type="button"
            className="w-full cursor-pointer text-left hover:text-sidebar-foreground"
            onClick={() => handleNavigate("/edu")}
          >
            Education
          </button>
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => handleNavigate("/edu#uni")}>
                BSc Computer Security
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => handleNavigate("/edu#chs")}>
                Cardiff High School
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>

        {
          // MARK: Activities
        }
        <SidebarGroupLabel asChild>
          <button
            type="button"
            className="w-full cursor-pointer text-left hover:text-sidebar-foreground"
            onClick={() => handleNavigate("/activities")}
          >
            External Activities
          </button>
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => handleNavigate("/activities#enactus")}
              >
                Enactus
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => handleNavigate("/activities#cyc")}
              >
                Cardiff Youth Council
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => handleNavigate("/activities#3d")}
              >
                3D Printing Hobbiest
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>

      {
        // MARK: Footer
      }
      <SidebarFooter className="border-t-2">
        <a
          href="https://www.linkedin.com/in/ewrdad/"
          target="_blank"
          rel="noreferrer"
          onClick={closeMobile}
        >
          <SidebarMenuButton>Get In Contact</SidebarMenuButton>
        </a>
        <a href="/EdwardJones-Resume-Sanitised.pdf" onClick={closeMobile}>
          <SidebarMenuButton>Download CV</SidebarMenuButton>
        </a>
        <SidebarMenuButton onClick={() => handleNavigate("/resources")}>
          Resources
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
