
import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import MusicPlayer from "../player/MusicPlayer";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-music-base">
      <Sidebar />
      <main className="flex-1 ml-60 pb-24 min-h-screen border-5 border-music-elevated">
        <div className="border-5 border-music-elevated m-5 min-h-[calc(100vh-10rem)]">
          {children}
        </div>
      </main>
      <MusicPlayer />
    </div>
  );
};

export default PageLayout;
