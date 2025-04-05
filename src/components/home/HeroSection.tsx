
import { PlayCircle, Clock, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url(https://picsum.photos/seed/hero/1600/800)", filter: 'brightness(0.6)' }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-music-base via-transparent to-transparent" />
      
      <div className="absolute bottom-0 left-0 p-10 w-full">
        <div className="flex items-end gap-6">
          <img 
            src="https://picsum.photos/seed/album30/300/300" 
            alt="Album cover" 
            className="w-40 h-40 object-cover shadow-2xl rounded-md"
          />
          
          <div className="flex-1">
            <span className="text-sm font-medium uppercase mb-2 block">Album</span>
            <h1 className="text-6xl font-bold mb-4">After Hours</h1>
            <div className="flex items-center text-sm text-foreground/80 gap-1 mb-4">
              <img 
                src="https://picsum.photos/seed/artist/40/40" 
                alt="Artist" 
                className="w-6 h-6 rounded-full mr-2"
              />
              <span className="font-medium text-foreground">The Weeknd</span>
              <span>• 2020 •</span>
              <span>14 songs,</span>
              <Clock className="h-3 w-3 mx-1" />
              <span>56 min 22 sec</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="bg-music-highlight text-black font-medium rounded-full py-3 px-8 hover:bg-music-highlight/90 transition-colors flex items-center gap-2">
                <PlayCircle className="h-5 w-5" fill="currentColor" /> Play
              </button>
              <button className="border border-foreground/30 hover:border-foreground rounded-full py-3 px-6 transition-colors">
                Save to Library
              </button>
              <Star className="h-6 w-6 cursor-pointer hover:text-music-highlight transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
