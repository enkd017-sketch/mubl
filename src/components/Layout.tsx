import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import spaceBg from "@/assets/space-bg.jpg";

interface LayoutProps {
  children: React.ReactNode;
  showBackground?: boolean;
}

export function Layout({ children, showBackground = false }: LayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1 overflow-auto">
          {showBackground && (
            <div 
              className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
              style={{ backgroundImage: `url(${spaceBg})` }}
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
