
import { useState } from "react";
import { 
  Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle, 
  Mic, Maximize2, List, Heart
} from "lucide-react";
import { Slider } from "@/components/ui/slider";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 217; // 3:37 in seconds

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-music-base border-t border-border p-4 z-50 flex items-center">
      <div className="flex items-center w-1/4">
        <img 
          src="https://picsum.photos/seed/album1/80/80" 
          alt="Album cover" 
          className="h-14 w-14 rounded-md mr-3"
        />
        <div>
          <h4 className="font-medium">Blinding Lights</h4>
          <p className="text-sm text-muted-foreground">The Weeknd</p>
        </div>
        <button className="ml-4">
          <Heart className="h-5 w-5 hover:text-music-highlight transition-colors" />
        </button>
      </div>
      
      <div className="flex-1 max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-6 mb-1">
          <button className="text-foreground/80 hover:text-foreground transition-colors">
            <Shuffle className="h-4 w-4" />
          </button>
          <button className="text-foreground/80 hover:text-foreground transition-colors">
            <SkipBack className="h-5 w-5" />
          </button>
          <button 
            className="bg-white rounded-full p-2 hover:scale-105 transition-transform"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 text-black" />
            ) : (
              <Play className="h-5 w-5 text-black" />
            )}
          </button>
          <button className="text-foreground/80 hover:text-foreground transition-colors">
            <SkipForward className="h-5 w-5" />
          </button>
          <button className="text-foreground/80 hover:text-foreground transition-colors">
            <Repeat className="h-4 w-4" />
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">{formatTime(currentTime)}</span>
          <Slider 
            value={[currentTime]} 
            max={duration}
            step={1}
            onValueChange={(values) => setCurrentTime(values[0])}
            className="flex-1"
          />
          <span className="text-xs text-muted-foreground">{formatTime(duration)}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-end gap-4 w-1/4">
        <button className="text-foreground/80 hover:text-foreground transition-colors">
          <Mic className="h-4 w-4" />
        </button>
        <button className="text-foreground/80 hover:text-foreground transition-colors">
          <List className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          <Volume2 className="h-4 w-4" />
          <Slider 
            defaultValue={[70]} 
            max={100}
            step={1}
            className="w-20"
          />
        </div>
        <button className="text-foreground/80 hover:text-foreground transition-colors">
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
