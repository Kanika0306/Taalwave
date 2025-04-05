
const RecommendedArtists = () => {
  const artists = [
    { id: '1', name: 'Ariana Grande', imageUrl: 'https://picsum.photos/seed/artist1/200/200' },
    { id: '2', name: 'The Weeknd', imageUrl: 'https://picsum.photos/seed/artist2/200/200' },
    { id: '3', name: 'Billie Eilish', imageUrl: 'https://picsum.photos/seed/artist3/200/200' },
    { id: '4', name: 'Drake', imageUrl: 'https://picsum.photos/seed/artist4/200/200' },
    { id: '5', name: 'Taylor Swift', imageUrl: 'https://picsum.photos/seed/artist5/200/200' },
    { id: '6', name: 'Dua Lipa', imageUrl: 'https://picsum.photos/seed/artist6/200/200' },
  ];
  
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Artists You May Like</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {artists.map(artist => (
          <div key={artist.id} className="flex flex-col items-center">
            <div className="mb-3 relative group">
              <img 
                src={artist.imageUrl} 
                alt={artist.name} 
                className="w-full aspect-square object-cover rounded-full hover-scale"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            </div>
            <h3 className="text-sm font-medium text-center">{artist.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedArtists;
