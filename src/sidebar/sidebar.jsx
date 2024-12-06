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
  import { useNavigate } from "react-router"
  
  export function AppSidebar() {

    const navigate = useNavigate()

    return (
      <Sidebar >
        <SidebarHeader >
<SidebarMenu>
        <SidebarMenuItem>
              <SidebarMenuButton onClick={() => {navigate("/")}}>
                Edward Jones
                </SidebarMenuButton>
            </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

        <SidebarContent >

          <SidebarGroupLabel onClick={() => {navigate("/work")}}>Work</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
            <SidebarMenuItem onClick={() => {navigate("/work#raytheon")}}>
              <SidebarMenuButton onClick={() => {navigate("/work#raytheon")}}>Raytheon (2022 - Present)</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => {navigate("/work#ukaea")}}>UKAEA (2020 - 2021)</SidebarMenuButton>
            </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
         

          <SidebarGroupLabel onClick={() => {navigate("/certs")}}>Certifcations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => {navigate("/certs#aws")}}>AWS</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => {navigate("/certs#comptia")}}>CompTIA</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => {navigate("/certs#azure")}}>Azure</SidebarMenuButton>
            </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroupLabel onClick={() => {navigate("/cpd")}}>Proffesional Development</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => {navigate("/cpd#bcs")}}>BCS Membership</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => {navigate("/cpd#online")}}>Online Training</SidebarMenuButton>
            </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>


          <SidebarGroupLabel onClick={() => {navigate("/projects")}}>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => {navigate("/projects#raytheon")}}>Portfolio</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => {navigate("/projects#raytheon")}}>JsUseDocs</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => {navigate("/projects#raytheon")}}>LiveQuery</SidebarMenuButton>
            </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroupLabel onClick={() => {navigate("/activities")}}>External Activities</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => {navigate("/activities#enactus")}}>Enactus</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => {navigate("/activities#cyc")}}>Cardiff Youth Council</SidebarMenuButton>
            </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>

        </SidebarContent>

        

        <SidebarFooter />
      </Sidebar>
    )
  }
  