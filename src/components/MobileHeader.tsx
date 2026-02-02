import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import mublWhiteLogo from "@/assets/mubl-white-logo.png";

export function MobileHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/80 backdrop-blur-md border-b border-border md:hidden">
      <img 
        src={mublWhiteLogo} 
        alt="MUBL" 
        className="h-8 w-auto"
      />
      <Button 
        variant="ghost" 
        size="icon"
        onClick={toggleSidebar}
        className="text-foreground hover:bg-muted"
      >
        <Menu className="h-6 w-6" />
      </Button>
    </header>
  );
}
