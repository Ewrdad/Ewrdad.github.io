import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu
    
  } from "@/components/ui/sidebar"
  
  export function AppSidebar() {
    return (
      <Sidebar >
        <SidebarHeader >
<SidebarMenu>
        <SidebarMenuItem>
              <SidebarMenuButton>
                Edward Jones
                </SidebarMenuButton>
            </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

        <SidebarContent >

          <SidebarGroupLabel>Work</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Raytheon (2022 - Present)</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>UKAEA (2020 - 2021)</SidebarMenuButton>
            </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
         

          <SidebarGroupLabel>Certifcations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>AWS</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>CompTIA</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Azure</SidebarMenuButton>
            </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroupLabel>Proffesional Development</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>BCS Membership</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Online Training</SidebarMenuButton>
            </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>


          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Portfolio</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>JsUseDocs</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>LiveQuery</SidebarMenuButton>
            </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroupLabel>External Activities</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Enactus</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Cardiff Youth Council</SidebarMenuButton>
            </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>

        </SidebarContent>

        

        <SidebarFooter />
      </Sidebar>
    )
  }
  