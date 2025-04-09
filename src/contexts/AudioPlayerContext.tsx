
import React, { createContext, useState, useRef, useEffect } from 'react';
import playlistData from '../data/playlist.json';

export type Song = {
  id: string;
  title: string;
  artist: string;
  album: string;
  cover: string;
  audioSrc: string;
  duration: number;
};

type AudioPlayerContextType = {
  currentSong: Song | null;
  isPlaying: boolean;
  playlist: Song[];
  currentTime: number;
  duration: number;
  play: () => void;
  pause: () => void;
  togglePlayPause: () => void;
  playNext: () => void;
  playPrevious: () => void;
  seekTo: (time: number) => void;
  setVolume: (volume: number) => void;
  audioElement: React.RefObject<HTMLAudioElement>;
};

export const AudioPlayerContext = createContext<AudioPlayerContextType | null>(null);

export const AudioPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [playlist, setPlaylist] = useState<Song[]>(playlistData);
  const [currentSong, setCurrentSong] = useState<Song | null>(playlist[0] || null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioElement = useRef<HTMLAudioElement>(null);
  
  useEffect(() => {
    // Initialize audio element
    if (audioElement.current) {
      audioElement.current.addEventListener('timeupdate', updateProgress);
      audioElement.current.addEventListener('ended', handleSongEnd);
      audioElement.current.addEventListener('loadedmetadata', () => {
        setDuration(audioElement.current?.duration || 0);
      });

      // Set initial audio source
      if (currentSong) {
        audioElement.current.src = currentSong.audioSrc;
        audioElement.current.load();
      }
    }
    
    return () => {
      if (audioElement.current) {
        audioElement.current.removeEventListener('timeupdate', updateProgress);
        audioElement.current.removeEventListener('ended', handleSongEnd);
      }
    };
  }, []);
  
  useEffect(() => {
    // Handle song change
    if (currentSong && audioElement.current) {
      audioElement.current.src = currentSong.audioSrc;
      audioElement.current.load();
      
      // If we were playing before changing songs, continue playing
      if (isPlaying) {
        audioElement.current.play()
          .then(() => console.log("Playing new song"))
          .catch(error => console.error("Playback failed:", error));
      }
    }
  }, [currentSong]);
  
  const updateProgress = () => {
    if (audioElement.current) {
      setCurrentTime(audioElement.current.currentTime);
    }
  };
  
  const handleSongEnd = () => {
    playNext();
  };
  
  const play = () => {
    console.log("Play requested");
    if (audioElement.current) {
      console.log("Playing audio:", audioElement.current.src);
      audioElement.current.play()
        .then(() => {
          console.log("Playback started");
          setIsPlaying(true);
        })
        .catch(error => console.error("Playback failed:", error));
    } else {
      console.error("Audio element not available");
    }
  };
  
  const pause = () => {
    if (audioElement.current) {
      audioElement.current.pause();
      setIsPlaying(false);
    }
  };
  
  const togglePlayPause = () => {
    console.log("Toggle play/pause, current state:", isPlaying);
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };
  
  const playNext = () => {
    if (!currentSong || playlist.length === 0) return;
    
    const currentIndex = playlist.findIndex(song => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentSong(playlist[nextIndex]);
  };
  
  const playPrevious = () => {
    if (!currentSong || playlist.length === 0) return;
    
    const currentIndex = playlist.findIndex(song => song.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    setCurrentSong(playlist[prevIndex]);
  };
  
  const seekTo = (time: number) => {
    if (audioElement.current) {
      audioElement.current.currentTime = time;
      setCurrentTime(time);
    }
  };
  
  const setVolume = (volume: number) => {
    if (audioElement.current) {
      audioElement.current.volume = volume / 100;
    }
  };
  
  return (
    <AudioPlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        playlist,
        currentTime,
        duration,
        play,
        pause,
        togglePlayPause,
        playNext,
        playPrevious,
        seekTo,
        setVolume,
        audioElement
      }}
    >
      {children}
      <audio ref={audioElement}></audio>
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => {
  const context = React.useContext(AudioPlayerContext);
  if (!context) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  }
  return context;
};
