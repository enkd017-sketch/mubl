import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import mublLogo from "@/assets/mubl-logo.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="section-shell max-w-xl text-center">
        <img src={mublLogo} alt="MUBL Logo" className="mx-auto mb-6 h-16 w-auto" />
        <div className="eyebrow">404</div>
        <h1 className="page-title mt-6">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-300">
          The route you requested does not exist anymore or has moved.
        </p>
        <a href="/" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
