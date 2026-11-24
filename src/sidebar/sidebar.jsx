import { Fragment } from "react";
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

const NAV_SECTIONS = [
  {
    label: "Work",
    to: "/work",
    items: [
      { label: "Raytheon (2022 - Present)", to: "/work#raytheon" },
      { label: "UKAEA (2020 - 2021)", to: "/work#ukaea" },
    ],
  },
  {
    label: "Certifcations",
    to: "/certs",
    items: [
      { label: "AWS", to: "/certs#aws" },
      { label: "CompTIA", to: "/certs#comptia" },
      { label: "Azure", to: "/certs#azure" },
    ],
  },
  {
    label: "Proffesional Development",
    to: "/cpd",
    items: [
      { label: "BCS Membership", to: "/cpd#bcs" },
      { label: "Online Training", to: "/cpd#online" },
    ],
  },
  {
    label: "Projects",
    to: "/projects",
    items: [
      { label: "Portfolio", to: "/projects#portfolio" },
      { label: "JsUseDocs", to: "/projects#jsusedocs" },
      { label: "LiveQuery", to: "/projects#livequery" },
    ],
  },
  {
    label: "Education",
    to: "/edu",
    items: [
      { label: "BSc Computer Security", to: "/edu#uni" },
      { label: "Cardiff High School", to: "/edu#chs" },
    ],
  },
  {
    label: "External Activities",
    to: "/activities",
    items: [
      { label: "Enactus", to: "/activities#enactus" },
      { label: "Cardiff Youth Council", to: "/activities#cyc" },
      { label: "3D Printing Hobbiest", to: "/activities#3d" },
    ],
  },
];

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
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => handleNavigate("/")}>
              Edward Jones
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="px-2 py-2">
        {NAV_SECTIONS.map((section) => (
          <Fragment key={section.to}>
            <SidebarGroupLabel asChild>
              <button
                type="button"
                className="w-full cursor-pointer text-left hover:text-sidebar-foreground"
                onClick={() => handleNavigate(section.to)}
              >
                {section.label}
              </button>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.to}>
                    <SidebarMenuButton onClick={() => handleNavigate(item.to)}>
                      {item.label}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </Fragment>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t-2">
        <SidebarMenuButton asChild>
          <a
            href="https://www.linkedin.com/in/ewrdad/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
          >
            Get In Contact
          </a>
        </SidebarMenuButton>
        <SidebarMenuButton asChild>
          <a
            href={`${import.meta.env.BASE_URL}EdwardJones-Resume-Sanitised.pdf`}
            onClick={closeMobile}
          >
            Download CV
          </a>
        </SidebarMenuButton>
        <SidebarMenuButton onClick={() => handleNavigate("/resources")}>
          Resources
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
