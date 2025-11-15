import { Outlet } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <footer className="brutalist-border-medium bg-foreground text-background py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold">
            © {new Date().getFullYear()} BOGNA BARTKOWIAK. WSZELKIE PRAWA ZASTRZEŻONE.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
