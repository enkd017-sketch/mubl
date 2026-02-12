import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  Info, 
  FolderOpen, 
  Calendar, 
  Trophy, 
  BookOpen, 
  FileText, 
  Linkedin,
  Globe,
  PanelLeftClose,
  PanelLeft,
  Send
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
  { title: "Ideas", url: "/ideas", icon: Send },
  { title: "Projects", url: "/projects", icon: FolderOpen },
  { title: "Events", url: "/events", icon: Calendar },
  { title: "Achievements", url: "/achievements", icon: Trophy },
  { title: "Blog", url: "/blog", icon: BookOpen },
  { title: "Resources", url: "/resources", icon: FileText },
];

const socialLinks = [
  { 
    name: "Telegram", 
    url: "https://t.me/marvelousacosmos", 
    icon: Send 
  },
  { 
    name: "LinkedIn", 
    url: "https://www.linkedin.com/company/mirzo-ulugh-beg-s-legacy/", 
    icon: Linkedin 
  },
  { 
    name: "Website", 
    url: "https://mubl.uz", 
    icon: Globe 
  },
];

export function AppSidebar() {
  const location = useLocation();
  const { state, toggleSidebar, setOpenMobile } = useSidebar();
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => location.pathname === path;

  // Close mobile sidebar when navigating
  const handleNavClick = () => {
    setOpenMobile(false);
  };

  return (
    <Sidebar 
      collapsible="icon" 
      className="border-r border-sidebar-border bg-sidebar hidden md:flex"
    >
      <SidebarHeader className="p-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <img 
              src={mublWhiteLogo} 
              alt="MUBL" 
              className={`transition-all duration-200 ${isCollapsed ? "h-6 w-auto" : "h-10 w-auto"}`}
            />
            {!isCollapsed && (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={toggleSidebar}
                className="ml-auto text-sidebar-foreground hover:bg-sidebar-accent h-8 w-8"
              >
                <PanelLeftClose className="h-4 w-4" />
              </Button>
            )}
            {isCollapsed && (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={toggleSidebar}
                className="text-sidebar-foreground hover:bg-sidebar-accent h-6 w-6"
              >
                <PanelLeft className="h-3 w-3" />
              </Button>
            )}
          </div>
          {!isCollapsed && (
            <span className="text-xs text-sidebar-foreground/60 mt-1">
              Mirzo Ulugh Beg's Legacy
            </span>
          )}
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
                      onClick={handleNavClick}
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

      </SidebarContent>

      <SidebarFooter className="p-4">
        {/* Social Links */}
        {!isCollapsed && (
          <div className="flex items-center justify-center gap-2 mb-3">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-sidebar-accent/50 text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                title={social.name}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
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
      </SidebarFooter>
    </Sidebar>
  );
}
