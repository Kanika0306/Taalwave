
import { Search, Mic } from "lucide-react";
import MoodPlaylistGenerator from "@/components/playlists/MoodPlaylistGenerator";

const SearchPage = () => {
  // These would come from an API in a real application
  const categories = [
    { id: 1, name: "Pop", color: "from-pink-500 to-purple-500", image: "https://picsum.photos/seed/pop/300/300" },
    { id: 2, name: "Hip-Hop", color: "from-yellow-500 to-orange-500", image: "https://picsum.photos/seed/hiphop/300/300" },
    { id: 3, name: "Rock", color: "from-red-500 to-red-800", image: "https://picsum.photos/seed/rock/300/300" },
    { id: 4, name: "Electronic", color: "from-blue-400 to-blue-600", image: "https://picsum.photos/seed/electronic/300/300" },
    { id: 5, name: "R&B", color: "from-purple-400 to-indigo-500", image: "https://picsum.photos/seed/rnb/300/300" },
    { id: 6, name: "Indie", color: "from-green-400 to-emerald-600", image: "https://picsum.photos/seed/indie/300/300" },
    { id: 7, name: "Jazz", color: "from-amber-400 to-yellow-600", image: "https://picsum.photos/seed/jazz/300/300" },
    { id: 8, name: "Classical", color: "from-slate-400 to-slate-700", image: "https://picsum.photos/seed/classical/300/300" },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Search</h1>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input 
            type="search" 
            className="block w-full pl-10 pr-16 py-3 bg-music-elevated rounded-md focus:outline-none focus:ring-2 focus:ring-music-highlight"
            placeholder="What do you want to listen to?"
          />
          <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground">
            <Mic className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Add the Mood Playlist Generator section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Create Playlist by Mood</h2>
        <MoodPlaylistGenerator />
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Browse All</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <div key={category.id} className="relative overflow-hidden rounded-lg aspect-square">
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80`} />
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute object-cover w-full h-full mix-blend-overlay opacity-50"
              />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
