
import { useState } from "react";
import { Play, Plus, Mic2, Radio, Share2, User, Clock, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const BroadcastPage = () => {
  const [activeTab, setActiveTab] = useState<'my-broadcasts' | 'discover'>('my-broadcasts');
  
  // Mock broadcast channels
  const myBroadcasts = [
    { id: 1, name: "Late Night Vibes", listeners: 42, isLive: true, coverUrl: "https://picsum.photos/seed/broadcast1/300/300" },
    { id: 2, name: "Morning Jazz", listeners: 0, isLive: false, coverUrl: "https://picsum.photos/seed/broadcast2/300/300" },
    { id: 3, name: "Weekend Playlist", listeners: 0, isLive: false, coverUrl: "https://picsum.photos/seed/broadcast3/300/300" },
  ];
  
  const popularBroadcasts = [
    { id: 4, name: "Electronic Beats", listeners: 1245, creator: "DJ Electron", coverUrl: "https://picsum.photos/seed/broadcast4/300/300" },
    { id: 5, name: "Acoustic Sessions", listeners: 876, creator: "Guitar Master", coverUrl: "https://picsum.photos/seed/broadcast5/300/300" },
    { id: 6, name: "Hip Hop Showcase", listeners: 2103, creator: "Beat Maker", coverUrl: "https://picsum.photos/seed/broadcast6/300/300" },
    { id: 7, name: "Classical Evenings", listeners: 543, creator: "Piano Virtuoso", coverUrl: "https://picsum.photos/seed/broadcast7/300/300" },
    { id: 8, name: "Rock Legends", listeners: 1672, creator: "Guitar Hero", coverUrl: "https://picsum.photos/seed/broadcast8/300/300" },
    { id: 9, name: "Chill Study Beats", listeners: 3214, creator: "Lo-Fi Producer", coverUrl: "https://picsum.photos/seed/broadcast9/300/300" },
  ];
  
  const startNewBroadcast = () => {
    toast.success("Your broadcast is being prepared!");
    // In a real app, this would initiate a new broadcast
  };
  
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Broadcast</h1>
        <p className="text-muted-foreground">Create and discover live music broadcasts</p>
      </div>
      
      <div className="flex items-center justify-between mb-8">
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-md ${activeTab === 'my-broadcasts' ? 'bg-music-elevated text-foreground' : 'text-muted-foreground'}`}
            onClick={() => setActiveTab('my-broadcasts')}
          >
            My Broadcasts
          </button>
          <button
            className={`px-4 py-2 rounded-md ${activeTab === 'discover' ? 'bg-music-elevated text-foreground' : 'text-muted-foreground'}`}
            onClick={() => setActiveTab('discover')}
          >
            Discover
          </button>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              <span>Create Broadcast</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Create a New Broadcast</DialogTitle>
              <DialogDescription>
                Share your music taste with the world in real-time
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <label htmlFor="broadcast-name" className="text-sm font-medium block mb-1">
                  Broadcast Name
                </label>
                <Input id="broadcast-name" placeholder="Name your broadcast" />
              </div>
              <div>
                <label htmlFor="broadcast-desc" className="text-sm font-medium block mb-1">
                  Description
                </label>
                <Input id="broadcast-desc" placeholder="Describe your broadcast" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium block mb-1">
                    Broadcast Type
                  </label>
                  <select className="w-full bg-background border border-input rounded-md p-2">
                    <option>Public</option>
                    <option>Private</option>
                    <option>Friends Only</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">
                    Genre
                  </label>
                  <select className="w-full bg-background border border-input rounded-md p-2">
                    <option>Pop</option>
                    <option>Rock</option>
                    <option>Electronic</option>
                    <option>Hip-Hop</option>
                    <option>Jazz</option>
                    <option>Classical</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="pt-2">
                <Button onClick={startNewBroadcast} className="w-full">Start Broadcasting</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      {activeTab === 'my-broadcasts' ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Broadcasts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myBroadcasts.map(broadcast => (
              <div key={broadcast.id} className="border-5 border-music-elevated bg-music-surface rounded-lg overflow-hidden">
                <div className="relative aspect-video">
                  <img 
                    src={broadcast.coverUrl} 
                    alt={broadcast.name} 
                    className="w-full h-full object-cover"
                  />
                  {broadcast.isLive ? (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <span className="inline-block h-2 w-2 rounded-full bg-white animate-pulse"></span>
                      LIVE
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Button variant="outline" className="bg-white/10 backdrop-blur-sm">
                        <Play className="h-5 w-5 mr-2" />
                        Start
                      </Button>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">{broadcast.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <User className="h-3.5 w-3.5 mr-1" />
                    <span>You</span>
                    {broadcast.isLive && (
                      <>
                        <span className="mx-1">•</span>
                        <span>{broadcast.listeners} listening</span>
                      </>
                    )}
                  </div>
                  <div className="flex justify-between">
                    {broadcast.isLive ? (
                      <Button size="sm" variant="destructive">End Broadcast</Button>
                    ) : (
                      <Button size="sm">Go Live</Button>
                    )}
                    <Button size="sm" variant="ghost">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="border border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <Radio className="h-10 w-10 mb-4 text-muted-foreground" />
              <h3 className="font-medium mb-1">Create New Broadcast</h3>
              <p className="text-sm text-muted-foreground mb-4">Share your favorite music with friends and fans</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  {/* Same dialog content as above */}
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Broadcast History</h2>
            <div className="space-y-4">
              <div className="bg-music-surface p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-music-elevated h-12 w-12 rounded mr-3 flex items-center justify-center">
                    <Mic2 className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium">Weekend Playlist</h3>
                    <div className="flex text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      <span>Apr 3, 2025 • 1h 24m • 86 listeners</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">View Stats</Button>
                  <Button size="sm">Rebroadcast</Button>
                </div>
              </div>
              
              <div className="bg-music-surface p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-music-elevated h-12 w-12 rounded mr-3 flex items-center justify-center">
                    <Mic2 className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium">Late Night Vibes</h3>
                    <div className="flex text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      <span>Apr 1, 2025 • 2h 10m • 124 listeners</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">View Stats</Button>
                  <Button size="sm">Rebroadcast</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">Popular Live Broadcasts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularBroadcasts.map(broadcast => (
              <div key={broadcast.id} className="border-5 border-music-elevated bg-music-surface rounded-lg overflow-hidden">
                <div className="relative aspect-video">
                  <img 
                    src={broadcast.coverUrl} 
                    alt={broadcast.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <span className="inline-block h-2 w-2 rounded-full bg-white animate-pulse"></span>
                    LIVE
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">{broadcast.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <User className="h-3.5 w-3.5 mr-1" />
                    <span>{broadcast.creator}</span>
                    <span className="mx-1">•</span>
                    <span>{broadcast.listeners} listening</span>
                  </div>
                  <Button size="sm">Join Broadcast</Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Browse by Genre</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {["Pop", "Electronic", "Hip-Hop", "Rock", "Jazz", "Classical", "R&B", "Country", "Indie"].map((genre, index) => (
                <div 
                  key={index} 
                  className="aspect-square relative rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                >
                  <img 
                    src={`https://picsum.photos/seed/genre${index}/300/300`} 
                    alt={genre} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-3">
                      <h3 className="font-medium text-white">{genre}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BroadcastPage;
