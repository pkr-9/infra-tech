import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const InnerPageLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Added top padding to account for the double-decor height (approx 104px) */}
      <main className="flex-grow pt-[110px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
