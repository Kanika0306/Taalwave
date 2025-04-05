
import React, { useState } from "react";
import { 
  Smile, Frown, Cloud, Sun, Moon, Heart, Music, 
  Headphones, Zap, Coffee, Glasses, Umbrella, PartyPopper
} from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  RadioGroup,
  RadioGroupItem
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

type Mood = {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  sample: string[];
};

const moods: Mood[] = [
  { 
    id: "happy", 
    name: "Happy", 
    icon: <Smile className="h-6 w-6" />, 
    color: "from-yellow-500 to-orange-400",
    description: "Upbeat and cheerful music to lift your spirits",
    sample: ["Good Day", "Happy Together", "Walking on Sunshine"]
  },
  { 
    id: "sad", 
    name: "Sad", 
    icon: <Frown className="h-6 w-6" />, 
    color: "from-blue-600 to-indigo-700",
    description: "Melancholic tunes for when you're feeling down",
    sample: ["Someone Like You", "Nothing Compares 2 U", "Tears in Heaven"]
  },
  { 
    id: "chill", 
    name: "Chill", 
    icon: <Cloud className="h-6 w-6" />, 
    color: "from-sky-400 to-teal-500",
    description: "Relaxing beats to unwind and destress",
    sample: ["Chill Vibes", "Lo-Fi Hip Hop", "Ambient Dreams"]
  },
  { 
    id: "energetic", 
    name: "Energetic", 
    icon: <Zap className="h-6 w-6" />, 
    color: "from-red-500 to-rose-600",
    description: "High energy tracks to get you pumped up",
    sample: ["Can't Stop", "Uptown Funk", "Eye of the Tiger"]
  },
  { 
    id: "focus", 
    name: "Focus", 
    icon: <Glasses className="h-6 w-6" />, 
    color: "from-purple-600 to-indigo-700",
    description: "Concentration-enhancing music for work or study",
    sample: ["Deep Focus", "Study Beats", "Concentration"]
  },
  { 
    id: "romantic", 
    name: "Romantic", 
    icon: <Heart className="h-6 w-6" />, 
    color: "from-pink-500 to-rose-500",
    description: "Lovely tunes for those special moments",
    sample: ["Love Songs", "Romantic Ballads", "Sweet Serenades"]
  },
  { 
    id: "morning", 
    name: "Morning", 
    icon: <Coffee className="h-6 w-6" />, 
    color: "from-amber-300 to-orange-400",
    description: "Fresh tracks to start your day right",
    sample: ["Morning Motivation", "Rise & Shine", "A.M. Acoustic"]
  },
  { 
    id: "evening", 
    name: "Evening", 
    icon: <Moon className="h-6 w-6" />, 
    color: "from-indigo-800 to-violet-900",
    description: "Mellow tunes for winding down at night",
    sample: ["Night Vibes", "Evening Chill", "Stargazing"]
  },
  { 
    id: "workout", 
    name: "Workout", 
    icon: <Zap className="h-6 w-6" />, 
    color: "from-green-500 to-emerald-600",
    description: "High-tempo beats to fuel your exercise",
    sample: ["Workout Mix", "Gym Motivation", "Running Playlist"]
  },
  { 
    id: "party", 
    name: "Party", 
    icon: <PartyPopper className="h-6 w-6" />, 
    color: "from-purple-500 to-pink-500",
    description: "Hit tracks to get the party started",
    sample: ["Party Anthems", "Dance Hits", "Saturday Night"]
  },
  { 
    id: "rainy", 
    name: "Rainy Day", 
    icon: <Umbrella className="h-6 w-6" />, 
    color: "from-blue-400 to-blue-600",
    description: "Cozy tunes for rainy weather",
    sample: ["Rainy Day Jazz", "Coffee Shop Acoustics", "Piano in the Rain"]
  }
];

const genres = [
  "Pop", "Rock", "Hip-Hop", "R&B", "Electronic", 
  "Jazz", "Classical", "Country", "Indie", "Latin",
  "K-Pop", "Alternative", "Blues", "Folk", "Reggae"
];

// New advanced creation options
const tempos = [
  { id: "slow", name: "Slow & Easy", bpm: "60-90 BPM" },
  { id: "medium", name: "Medium", bpm: "90-120 BPM" },
  { id: "upbeat", name: "Upbeat", bpm: "120-140 BPM" },
  { id: "fast", name: "Fast & Energetic", bpm: "140+ BPM" }
];

const decades = [
  "2020s", "2010s", "2000s", "1990s", "1980s", "1970s", "1960s", "Classic"
];

const MoodPlaylistGenerator = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [playlistName, setPlaylistName] = useState("");
  const [genre, setGenre] = useState("");
  const [duration, setDuration] = useState("30");
  const [selectedDecade, setSelectedDecade] = useState("");
  const [selectedTempo, setSelectedTempo] = useState("");
  const [includeInstrumental, setIncludeInstrumental] = useState(false);
  const [advancedOptions, setAdvancedOptions] = useState(false);
  
  const createPlaylist = () => {
    // In a real app, this would call an API to create the playlist
    console.log("Creating playlist:", {
      name: playlistName || `${selectedMood?.name} Mix`,
      mood: selectedMood?.id,
      genre,
      duration: parseInt(duration),
      ...(advancedOptions && {
        decade: selectedDecade,
        tempo: selectedTempo,
        includeInstrumental
      })
    });
    
    // Reset form or show confirmation
    alert("Playlist created! Check your library");
  };

  return (
    <div className="p-6 bg-music-surface rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Create Mood Playlist</h2>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">How are you feeling today?</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {moods.map((mood) => (
            <div 
              key={mood.id}
              onClick={() => {
                setSelectedMood(mood);
                setPlaylistName(`${mood.name} Mix`);
              }}
              className={`rounded-lg p-4 flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105
                ${selectedMood?.id === mood.id 
                  ? 'ring-2 ring-music-highlight bg-gradient-to-br ' + mood.color + ' bg-opacity-80' 
                  : 'bg-music-elevated hover:bg-music-base'}`}
            >
              <div className={`mb-2 text-white ${selectedMood?.id === mood.id ? 'opacity-100' : 'opacity-70'}`}>
                {mood.icon}
              </div>
              <span className="text-sm font-medium">{mood.name}</span>
            </div>
          ))}
        </div>
      </div>

      {selectedMood && (
        <>
          <div className="bg-gradient-to-br rounded-lg p-4 mb-8 glass-card">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-full bg-gradient-to-br ${selectedMood.color}`}>
                {selectedMood.icon}
              </div>
              <div>
                <h3 className="font-medium">{selectedMood.name} Playlist</h3>
                <p className="text-sm text-muted-foreground">{selectedMood.description}</p>
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Sample tracks:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {selectedMood.sample.map((track, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Music className="h-3 w-3" /> {track}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="playlistName">
                Playlist Name
              </label>
              <Input
                id="playlistName"
                value={playlistName}
                onChange={e => setPlaylistName(e.target.value)}
                placeholder="Enter playlist name"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Preferred Genre
                </label>
                <Select value={genre} onValueChange={setGenre}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a genre" />
                  </SelectTrigger>
                  <SelectContent>
                    {genres.map(g => (
                      <SelectItem key={g} value={g}>{g}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Playlist Duration
                </label>
                <RadioGroup defaultValue="30" value={duration} onValueChange={setDuration}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="30" id="r1" />
                    <label htmlFor="r1">30 minutes</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="60" id="r2" />
                    <label htmlFor="r2">1 hour</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="120" id="r3" />
                    <label htmlFor="r3">2 hours</label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            
            {/* Advanced Options Toggle */}
            <div className="pt-2">
              <button 
                type="button"
                onClick={() => setAdvancedOptions(!advancedOptions)}
                className="text-sm text-music-highlight hover:text-music-highlight/80 flex items-center gap-2"
              >
                {advancedOptions ? "Hide" : "Show"} Advanced Options
              </button>
            </div>
            
            {/* Advanced Options Panel */}
            {advancedOptions && (
              <Card className="bg-music-elevated border-music-base">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Era/Decade
                      </label>
                      <Select value={selectedDecade} onValueChange={setSelectedDecade}>
                        <SelectTrigger>
                          <SelectValue placeholder="Any decade" />
                        </SelectTrigger>
                        <SelectContent>
                          {decades.map(d => (
                            <SelectItem key={d} value={d}>{d}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Tempo/Energy
                      </label>
                      <Select value={selectedTempo} onValueChange={setSelectedTempo}>
                        <SelectTrigger>
                          <SelectValue placeholder="Any tempo" />
                        </SelectTrigger>
                        <SelectContent>
                          {tempos.map(t => (
                            <SelectItem key={t.id} value={t.id}>
                              {t.name} <span className="text-xs opacity-70">({t.bpm})</span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="instrumental"
                        checked={includeInstrumental}
                        onChange={(e) => setIncludeInstrumental(e.target.checked)}
                        className="rounded border-gray-600 text-music-highlight focus:ring-music-highlight"
                      />
                      <Label htmlFor="instrumental">Include instrumental tracks</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            <Button 
              onClick={createPlaylist} 
              className="w-full"
              disabled={!selectedMood}
            >
              <Headphones className="mr-2 h-4 w-4" />
              Create Playlist
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default MoodPlaylistGenerator;
