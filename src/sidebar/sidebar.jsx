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
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router";

export function AppSidebar() {
  const navigate = useNavigate();

  return (
    <Sidebar className="h-full">
      <SidebarHeader className="border-b-2">
        {
          // MARK: Top
        }
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => {
                navigate("/");
              }}
            >
              Edward Jones
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {
        // MARK: Work
      }
      <SidebarContent>
        <SidebarGroupLabel
          onClick={() => {
            navigate("/work");
          }}
        >
          Work
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem
              onClick={() => {
                navigate("/work#raytheon");
              }}
            >
              <SidebarMenuButton
                onClick={() => {
                  navigate("/work#raytheon");
                }}
              >
                Raytheon (2022 - Present)
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => {
                  navigate("/work#ukaea");
                }}
              >
                UKAEA (2020 - 2021)
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>

        {
          // MARK: Certs
        }
        <SidebarGroupLabel
          onClick={() => {
            navigate("/certs");
          }}
        >
          Certifcations
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => {
                  navigate("/certs#aws");
                }}
              >
                AWS
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => {
                  navigate("/certs#comptia");
                }}
              >
                CompTIA
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => {
                  navigate("/certs#azure");
                }}
              >
                Azure
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>

        {
          // MARK: CPD
        }
        <SidebarGroupLabel
          onClick={() => {
            navigate("/cpd");
          }}
        >
          Proffesional Development
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => {
                  navigate("/cpd#bcs");
                }}
              >
                BCS Membership
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => {
                  navigate("/cpd#online");
                }}
              >
                Online Training
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>

        {
          // MARK: Projects
        }
        <SidebarGroupLabel
          onClick={() => {
            navigate("/projects");
          }}
        >
          Projects
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => {
                  navigate("/projects#portfolio");
                }}
              >
                Portfolio
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => {
                  navigate("/projects#jsusedocs");
                }}
              >
                JsUseDocs
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => {
                  navigate("/projects#livequery");
                }}
              >
                LiveQuery
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>

        {
          // MARK: Education
        }
        <SidebarGroupLabel
          onClick={() => {
            navigate("/edu");
          }}
        >
          Education
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => {
                  navigate("/edu#uni");
                }}
              >
                BSc Computer Security
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => {
                  navigate("/edu#chs");
                }}
              >
                Cardiff High School
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>

        {
          // MARK: Activities
        }

        <SidebarGroupLabel
          onClick={() => {
            navigate("/activities");
          }}
        >
          External Activities
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => {
                  navigate("/activities#enactus");
                }}
              >
                Enactus
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => {
                  navigate("/activities#cyc");
                }}
              >
                Cardiff Youth Council
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => {
                  navigate("/activities#3d");
                }}
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
        <a href="https://www.linkedin.com/in/ewrdad/">
          <SidebarMenuButton>Get In Contact</SidebarMenuButton>
        </a>
        <a href="/EdwardJones-Resume-Sanitised.pdf">
          <SidebarMenuButton>Download CV</SidebarMenuButton>
        </a>
        <SidebarMenuButton
          onClick={() => {
            navigate("/resources");
          }}
        >
          Resources
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
