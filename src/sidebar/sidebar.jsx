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
import { NAV_SECTIONS } from "@/data/navigation";

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
