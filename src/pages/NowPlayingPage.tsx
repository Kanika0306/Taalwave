
import { useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle, Heart, Share2, Mic, List } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";

const NowPlayingPage = () => {
  const { 
    currentSong, 
    isPlaying, 
    togglePlayPause, 
    playNext, 
    playPrevious,
    currentTime,
    duration,
    seekTo,
    setVolume
  } = useAudioPlayer();
  
  const [liked, setLiked] = useState(false);
  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Simulate audio visualizer bars
  const visualizerBars = Array.from({ length: 40 }, (_, i) => (
    <div 
      key={i}
      className="audio-visualizer-bar h-16" 
      style={{ "--i": i } as React.CSSProperties}
    ></div>
  ));
  
  if (!currentSong) {
    return (
      <div className="p-6 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">No song is currently playing</h2>
        <p>Select a song from your playlist to start playing</p>
      </div>
    );
  }
  
  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative group">
            <img 
              src={currentSong.cover} 
              alt={`${currentSong.album} album cover`} 
              className="w-full max-w-md aspect-square object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
              <button 
                className="bg-music-highlight rounded-full p-5 hover:scale-105 transition-transform"
                onClick={togglePlayPause}
              >
                {isPlaying ? (
                  <Pause className="h-10 w-10 text-black" />
                ) : (
                  <Play className="h-10 w-10 text-black" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{currentSong.title}</h1>
            <p className="text-lg md:text-xl text-foreground/80">{currentSong.artist} • {currentSong.album}</p>
          </div>
          
          <div className="flex items-center justify-center mb-6 h-24 overflow-hidden">
            {isPlaying && (
              <div className="flex items-end justify-center gap-[2px] h-full">
                {visualizerBars}
              </div>
            )}
            {!isPlaying && (
              <p className="text-xl text-center text-music-highlight">
                Press play to listen
              </p>
            )}
          </div>
          
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm text-muted-foreground">{formatTime(currentTime)}</span>
              <Slider 
                value={[currentTime]} 
                max={duration}
                step={1}
                onValueChange={(values) => seekTo(values[0])}
                className="flex-1"
              />
              <span className="text-sm text-muted-foreground">{formatTime(duration)}</span>
            </div>
            
            <div className="flex items-center justify-center gap-6 md:gap-8 mb-8">
              <button className="text-foreground/80 hover:text-foreground transition-colors">
                <Shuffle className="h-5 w-5" />
              </button>
              <button 
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={playPrevious}
              >
                <SkipBack className="h-6 md:h-7 w-6 md:w-7" />
              </button>
              <button 
                className="bg-white rounded-full p-3 md:p-4 hover:scale-105 transition-transform"
                onClick={togglePlayPause}
              >
                {isPlaying ? (
                  <Pause className="h-5 md:h-6 w-5 md:w-6 text-black" />
                ) : (
                  <Play className="h-5 md:h-6 w-5 md:w-6 text-black" />
                )}
              </button>
              <button 
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={playNext}
              >
                <SkipForward className="h-6 md:h-7 w-6 md:w-7" />
              </button>
              <button className="text-foreground/80 hover:text-foreground transition-colors">
                <Repeat className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <button 
                className={`${liked ? 'text-music-purple' : 'text-foreground/80 hover:text-foreground'} transition-colors`}
                onClick={() => setLiked(!liked)}
              >
                <Heart className={`h-5 w-5 ${liked ? 'fill-music-purple' : ''}`} />
              </button>
              <button className="text-foreground/80 hover:text-foreground transition-colors">
                <Mic className="h-5 w-5" />
              </button>
              <button className="text-foreground/80 hover:text-foreground transition-colors">
                <List className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-foreground/80" />
                <Slider 
                  defaultValue={[70]} 
                  max={100}
                  step={1}
                  className="w-24 md:w-28"
                  onValueChange={(values) => setVolume(values[0])}
                />
              </div>
              <button className="text-foreground/80 hover:text-foreground transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="bg-music-elevated rounded-lg p-4 md:p-5 mb-6">
            <h3 className="text-lg font-semibold mb-3">Lyrics</h3>
            <div className="space-y-2">
              <p className={`${isPlaying && currentTime > 10 && currentTime < 20 ? 'text-music-highlight' : 'text-foreground/70'}`}>
                Yeah
              </p>
              <p className={`${isPlaying && currentTime >= 20 && currentTime < 30 ? 'text-music-highlight' : 'text-foreground/70'}`}>
                I've been tryna call
              </p>
              <p className={`${isPlaying && currentTime >= 30 && currentTime < 40 ? 'text-music-highlight' : 'text-foreground/70'}`}>
                I've been on my own for long enough
              </p>
              <p className={`${isPlaying && currentTime >= 40 && currentTime < 50 ? 'text-music-highlight' : 'text-foreground/70'}`}>
                Maybe you can show me how to love, maybe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlayingPage;
