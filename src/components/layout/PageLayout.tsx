
import { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import Sidebar from "./Sidebar";
import MusicPlayer from "../player/MusicPlayer";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <TooltipProvider>
      <div className="flex flex-col md:flex-row min-h-screen bg-music-base">
        <Sidebar />
        <main className="flex-1 md:ml-60 pb-28 md:pb-24 min-h-screen border-5 border-music-elevated">
          <div className="border-5 border-music-elevated m-2 md:m-5 min-h-[calc(100vh-10rem)]">
            {children}
          </div>
        </main>
        <MusicPlayer />
      </div>
    </TooltipProvider>
  );
};

export default PageLayout;
