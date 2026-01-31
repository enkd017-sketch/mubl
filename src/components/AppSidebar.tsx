import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  Info, 
  FolderOpen, 
  Calendar, 
  Trophy, 
  BookOpen, 
  FileText, 
  Users,
  MessageCircle,
  UserPlus,
  Handshake,
  Mail,
  Github,
  Youtube,
  Twitter,
  PanelLeftClose,
  PanelLeft
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import mublWhiteLogo from "@/assets/mubl-white-logo.png";

const mainNavItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: Info },
  { title: "Projects", url: "/projects", icon: FolderOpen },
  { title: "Events", url: "/events", icon: Calendar },
  { title: "Achievements", url: "/achievements", icon: Trophy },
  { title: "Blog", url: "/blog", icon: BookOpen },
  { title: "Resources", url: "/resources", icon: FileText },
  { title: "Members", url: "/members", icon: Users },
  { title: "Connect", url: "/connect", icon: MessageCircle },
];

const actionItems = [
  { title: "Join as Member", url: "/join", icon: UserPlus },
  { title: "Collaborate / Partner", url: "/partner", icon: Handshake },
  { title: "Email Us", url: "mailto:mubl@newuu.uz", icon: Mail, external: true },
];

export function AppSidebar() {
  const location = useLocation();
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar 
      collapsible="icon" 
      className="border-r border-sidebar-border bg-sidebar"
    >
      <SidebarHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={mublWhiteLogo} 
              alt="MUBL" 
              className={`transition-all duration-200 ${isCollapsed ? "h-6 w-auto" : "h-10 w-auto"}`}
            />
            {!isCollapsed && (
              <div className="flex flex-col">
                <span className="text-xs text-sidebar-foreground/60">
                  Mirzo Ulugh Beg's Legacy
                </span>
              </div>
            )}
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={isActive(item.url)}
                    tooltip={item.title}
                  >
                    <NavLink 
                      to={item.url}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                        isActive(item.url) 
                          ? "bg-primary text-primary-foreground" 
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="my-2" />

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/50 text-xs font-normal">
            Connect
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {actionItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    tooltip={item.title}
                  >
                    {item.external ? (
                      <a 
                        href={item.url}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </a>
                    ) : (
                      <NavLink 
                        to={item.url}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                          isActive(item.url) 
                            ? "bg-primary text-primary-foreground" 
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </NavLink>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        {/* Social Links */}
        {!isCollapsed && (
          <div className="flex items-center justify-center gap-2 mb-3">
            <a 
              href="https://github.com/mubl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-sidebar-accent/50 text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a 
              href="https://youtube.com/@mubl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-sidebar-accent/50 text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a 
              href="https://twitter.com/mubl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-sidebar-accent/50 text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        )}

        {/* Email Button */}
        {!isCollapsed && (
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <a href="mailto:mubl@newuu.uz">
              Email Us
            </a>
          </Button>
        )}

        {/* Collapse Toggle */}
        <Button 
          variant="ghost" 
          size="icon"
          onClick={toggleSidebar}
          className="mt-2 mx-auto text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {isCollapsed ? (
            <PanelLeft className="h-4 w-4" />
          ) : (
            <PanelLeftClose className="h-4 w-4" />
          )}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
