import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import homeBg from "@/assets/home-bg.jpg";

interface LayoutProps {
  children: React.ReactNode;
  showBackground?: boolean;
}

export function Layout({ children, showBackground = false }: LayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className={`flex-1 overflow-auto ${showBackground ? "!bg-transparent" : ""}`}>
          {showBackground && (
            <div 
              className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
              style={{ backgroundImage: `url(${homeBg})` }}
            />
          )}
          <main className={showBackground ? "relative z-10" : ""}>
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
