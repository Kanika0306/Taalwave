
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-music-base flex-col p-6">
      <div className="text-center max-w-xl">
        <h1 className="text-8xl font-bold mb-4 text-music-highlight">404</h1>
        <p className="text-2xl mb-8">Oops! We couldn't find that page</p>
        <p className="text-muted-foreground mb-8">
          It seems you've wandered off the playlist. Let's get you back to the music.
        </p>
        <Link to="/" className="bg-music-highlight text-black font-medium rounded-full py-3 px-8 hover:bg-music-highlight/90 transition-colors flex items-center gap-2 justify-center w-fit mx-auto">
          <Home className="h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
