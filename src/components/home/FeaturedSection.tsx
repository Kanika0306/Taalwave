
import { ChevronRight, Play } from "lucide-react";

const FeaturedSection = ({ title, seeAllLink }: { title: string, seeAllLink: string }) => {
  // This is placeholder data - in a real app, fetch from API
  const playlists = [
    {
      id: '1',
      title: 'Today\'s Top Hits',
      description: 'Jung Kook is on top of the Hottest 50!',
      coverUrl: 'https://picsum.photos/seed/playlist1/300/300'
    },
    {
      id: '2',
      title: 'RapCaviar',
      description: 'New music from Drake, Kendrick Lamar and more',
      coverUrl: 'https://picsum.photos/seed/playlist2/300/300'
    },
    {
      id: '3',
      title: 'All Out 2010s',
      description: 'The biggest songs of the 2010s',
      coverUrl: 'https://picsum.photos/seed/playlist3/300/300'
    },
    {
      id: '4',
      title: 'Rock Classics',
      description: 'Rock legends & epic songs that continue to inspire generations',
      coverUrl: 'https://picsum.photos/seed/playlist4/300/300'
    },
    {
      id: '5',
      title: 'Chill Hits',
      description: 'Kick back to the best new and recent chill hits',
      coverUrl: 'https://picsum.photos/seed/playlist5/300/300'
    },
  ];

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <a href={seeAllLink} className="text-sm text-muted-foreground hover:text-music-highlight flex items-center">
          See All <ChevronRight className="h-4 w-4 ml-1" />
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {playlists.map(playlist => (
          <div key={playlist.id} className="playlist-card animate-fade-in group">
            <div className="mb-4 relative">
              <img 
                src={playlist.coverUrl} 
                alt={playlist.title} 
                className="w-full aspect-square object-cover rounded-md shadow-md"
              />
              <div className="absolute right-2 bottom-2 bg-music-highlight rounded-full p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <Play className="h-4 w-4 text-black" />
              </div>
            </div>
            <h3 className="font-medium mb-1 truncate">{playlist.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{playlist.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
