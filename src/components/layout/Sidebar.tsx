
import { NavLink } from "react-router-dom";
import { Home, Search, Library, PlusSquare, Heart, Disc3 } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-music-base border-r border-border h-screen flex flex-col overflow-y-auto fixed left-0 top-0 z-30">
      <div className="p-6">
        <h1 className="text-2xl font-bold flex items-center gap-2 mb-8">
          <Disc3 className="h-7 w-7 text-music-highlight animate-pulse-glow" />
          <span>Aurify</span>
        </h1>
        
        <nav className="mb-8">
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className={({isActive}) => `flex items-center gap-3 p-2 rounded-md ${isActive ? 'bg-music-elevated text-music-highlight' : 'hover:bg-music-surface'}`}>
                <Home className="h-5 w-5" />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/search" className={({isActive}) => `flex items-center gap-3 p-2 rounded-md ${isActive ? 'bg-music-elevated text-music-highlight' : 'hover:bg-music-surface'}`}>
                <Search className="h-5 w-5" />
                <span>Search</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/library" className={({isActive}) => `flex items-center gap-3 p-2 rounded-md ${isActive ? 'bg-music-elevated text-music-highlight' : 'hover:bg-music-surface'}`}>
                <Library className="h-5 w-5" />
                <span>Your Library</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        
        <div className="space-y-2">
          <button className="flex items-center gap-3 p-2 rounded-md hover:bg-music-surface w-full">
            <PlusSquare className="h-5 w-5" />
            <span>Create Playlist</span>
          </button>
          <button className="flex items-center gap-3 p-2 rounded-md hover:bg-music-surface w-full">
            <Heart className="h-5 w-5" />
            <span>Liked Songs</span>
          </button>
        </div>
      </div>
      
      <div className="border-t border-border mt-4 p-6">
        <h3 className="text-sm text-muted-foreground mb-4">YOUR PLAYLISTS</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-music-highlight">Chill Vibes</a></li>
          <li><a href="#" className="hover:text-music-highlight">Workout Mix</a></li>
          <li><a href="#" className="hover:text-music-highlight">Focus Flow</a></li>
          <li><a href="#" className="hover:text-music-highlight">Party Hits</a></li>
          <li><a href="#" className="hover:text-music-highlight">Throwbacks</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
