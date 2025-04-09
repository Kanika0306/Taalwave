
import { 
  Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Volume1,
  Repeat, Shuffle, Mic, Maximize2, List, Heart, FileText, ListMusic
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import { Progress } from "@/components/ui/progress";
import { Button } from "../ui/button";
import { toast } from "sonner";

const MusicPlayer = () => {
  const { 
    currentSong, 
    isPlaying, 
    togglePlayPause, 
    playNext, 
    playPrevious,
    currentTime,
    duration,
    seekTo,
    setVolume,
    play
  } = useAudioPlayer();
  
  const [isLiked, setIsLiked] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(70);

  // Initialize volume when component mounts
  useEffect(() => {
    setVolume(volumeLevel);
  }, []);
  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  const handleVolumeChange = (values: number[]) => {
    const newVolume = values[0];
    setVolumeLevel(newVolume);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };
  
  const toggleMute = () => {
    if (isMuted) {
      setVolumeLevel(prevVolume);
      setVolume(prevVolume);
      setIsMuted(false);
    } else {
      setPrevVolume(volumeLevel);
      setVolumeLevel(0);
      setVolume(0);
      setIsMuted(true);
    }
  };
  
  const handleProgressChange = (values: number[]) => {
    seekTo(values[0]);
  };

  const handlePlayClick = () => {
    if (!isPlaying && currentSong) {
      toast.success(`Playing: ${currentSong.title} by ${currentSong.artist}`, {
        duration: 2000,
      });
    }
    togglePlayPause();
  };
  
  // Calculate percentage for progress bar
  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;
  
  // Get volume icon based on level
  const VolumeIcon = () => {
    if (isMuted || volumeLevel === 0) return <VolumeX className="h-4 w-4" />;
    if (volumeLevel < 50) return <Volume1 className="h-4 w-4" />;
    return <Volume2 className="h-4 w-4" />;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-music-base border-t border-5 border-music-elevated p-4 z-50 flex flex-col md:flex-row items-center">
      {/* Mobile Progress Bar (visible only on small screens) */}
      <div className="w-full md:hidden mb-2">
        <Progress value={progressPercentage} className="h-1" />
      </div>
      
      <div className="flex items-center w-full md:w-1/4 mb-3 md:mb-0">
        {currentSong ? (
          <>
            <img 
              src={currentSong.cover} 
              alt={`${currentSong.album} cover`} 
              className="h-12 w-12 md:h-14 md:w-14 rounded-md mr-3"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm md:text-base truncate">{currentSong.title}</h4>
              <p className="text-xs md:text-sm text-muted-foreground truncate">{currentSong.artist}</p>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center">
            <div className="h-14 w-14 bg-music-elevated rounded-md mr-3 flex items-center justify-center">
              <ListMusic className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <h4 className="font-medium">No track selected</h4>
              <p className="text-sm text-muted-foreground">Select a song to play</p>
            </div>
          </div>
        )}
        <button className="ml-2 md:ml-4" onClick={() => setIsLiked(!isLiked)}>
          <Heart 
            className={`h-5 w-5 ${isLiked ? 'text-music-purple fill-music-purple' : 'hover:text-music-highlight transition-colors'}`} 
          />
        </button>
      </div>
      
      <div className="flex-1 max-w-full md:max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-3 md:gap-6 mb-1">
          <button className="text-foreground/80 hover:text-foreground transition-colors hidden md:block">
            <Shuffle className="h-4 w-4" />
          </button>
          <button 
            className="text-foreground/80 hover:text-foreground transition-colors" 
            onClick={playPrevious}
          >
            <SkipBack className="h-5 w-5" />
          </button>
          <button 
            className="bg-white rounded-full p-1.5 md:p-2 hover:scale-105 transition-transform"
            onClick={handlePlayClick}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 md:h-5 md:w-5 text-black" />
            ) : (
              <Play className="h-4 w-4 md:h-5 md:w-5 text-black" />
            )}
          </button>
          <button 
            className="text-foreground/80 hover:text-foreground transition-colors"
            onClick={playNext}
          >
            <SkipForward className="h-5 w-5" />
          </button>
          <button className="text-foreground/80 hover:text-foreground transition-colors hidden md:block">
            <Repeat className="h-4 w-4" />
          </button>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          <span className="text-xs text-muted-foreground">{formatTime(currentTime)}</span>
          <Slider 
            value={[currentTime]} 
            max={duration}
            step={1}
            onValueChange={handleProgressChange}
            className="flex-1"
          />
          <span className="text-xs text-muted-foreground">{formatTime(duration)}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-end gap-2 md:gap-4 w-full md:w-1/4 mt-2 md:mt-0">
        <button className="text-foreground/80 hover:text-foreground transition-colors hidden md:block">
          <Mic className="h-4 w-4" />
        </button>
        <button className="text-foreground/80 hover:text-foreground transition-colors hidden md:block">
          <FileText className="h-4 w-4" />
        </button>
        <button className="text-foreground/80 hover:text-foreground transition-colors">
          <ListMusic className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2 ml-1">
          <button onClick={toggleMute}>
            <VolumeIcon />
          </button>
          <Slider 
            value={[volumeLevel]} 
            max={100}
            step={1}
            onValueChange={handleVolumeChange}
            className="w-16 md:w-20"
          />
        </div>
        <button className="text-foreground/80 hover:text-foreground transition-colors hidden md:block">
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
