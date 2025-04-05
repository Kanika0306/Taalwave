
import { useState } from "react";
import { Grid, List, Filter, Clock, PlayCircle } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LibraryPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // This would come from an API in a real application
  const playlists = [
    { id: '1', name: 'Liked Songs', owner: 'You', songs: 345, lastPlayed: '2 hours ago', image: 'https://picsum.photos/seed/liked/300/300' },
    { id: '2', name: 'Discover Weekly', owner: 'Spotify', songs: 30, lastPlayed: 'Yesterday', image: 'https://picsum.photos/seed/discover/300/300' },
    { id: '3', name: 'Workout Mix', owner: 'You', songs: 45, lastPlayed: '3 days ago', image: 'https://picsum.photos/seed/workout/300/300' },
    { id: '4', name: 'Chill Vibes', owner: 'You', songs: 82, lastPlayed: 'Last week', image: 'https://picsum.photos/seed/chill/300/300' },
    { id: '5', name: 'Road Trip', owner: 'You', songs: 64, lastPlayed: '2 weeks ago', image: 'https://picsum.photos/seed/road/300/300' },
    { id: '6', name: 'Study Focus', owner: 'Spotify', songs: 100, lastPlayed: 'Last month', image: 'https://picsum.photos/seed/study/300/300' },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Your Library</h1>
        <div className="flex items-center gap-2">
          <button 
            className={`p-2 rounded-full ${viewMode === 'grid' ? 'bg-music-elevated' : 'hover:bg-music-surface'}`}
            onClick={() => setViewMode('grid')}
          >
            <Grid className="h-5 w-5" />
          </button>
          <button 
            className={`p-2 rounded-full ${viewMode === 'list' ? 'bg-music-elevated' : 'hover:bg-music-surface'}`}
            onClick={() => setViewMode('list')}
          >
            <List className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-music-surface ml-2">
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <Tabs defaultValue="playlists" className="mb-6">
        <TabsList className="bg-music-elevated">
          <TabsTrigger value="playlists">Playlists</TabsTrigger>
          <TabsTrigger value="artists">Artists</TabsTrigger>
          <TabsTrigger value="albums">Albums</TabsTrigger>
          <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
        </TabsList>
      </Tabs>
      
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {playlists.map(playlist => (
            <div key={playlist.id} className="playlist-card group">
              <div className="mb-4 relative">
                <img 
                  src={playlist.image} 
                  alt={playlist.name} 
                  className="w-full aspect-square object-cover rounded-md shadow-md"
                />
                <div className="absolute right-2 bottom-2 bg-music-highlight rounded-full p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <PlayCircle className="h-5 w-5 text-black" fill="currentColor" />
                </div>
              </div>
              <h3 className="font-medium mb-1">{playlist.name}</h3>
              <p className="text-sm text-muted-foreground">{playlist.owner} • {playlist.songs} songs</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-music-surface rounded-md overflow-hidden">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">#</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Title</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Owner</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden md:table-cell">Songs</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden lg:table-cell">Last played</th>
                <th className="text-right p-4 text-sm font-medium text-muted-foreground">
                  <Clock className="h-4 w-4 inline-block" />
                </th>
              </tr>
            </thead>
            <tbody>
              {playlists.map((playlist, index) => (
                <tr 
                  key={playlist.id}
                  className="hover:bg-music-elevated group cursor-pointer"
                >
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={playlist.image} 
                        alt={playlist.name} 
                        className="h-12 w-12 rounded-md"
                      />
                      <span className="font-medium">{playlist.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">{playlist.owner}</td>
                  <td className="p-4 text-sm text-muted-foreground hidden md:table-cell">{playlist.songs}</td>
                  <td className="p-4 text-sm text-muted-foreground hidden lg:table-cell">{playlist.lastPlayed}</td>
                  <td className="p-4 text-right">
                    <PlayCircle className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity inline-block text-music-highlight" fill="currentColor" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LibraryPage;
