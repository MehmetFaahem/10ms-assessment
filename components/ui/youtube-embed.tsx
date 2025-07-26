'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  thumbnail?: string;
}

export function YouTubeEmbed({ videoId, title, thumbnail }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePlay = () => {
    setIsLoaded(true);
  };

  if (!isLoaded) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <button
            onClick={handlePlay}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white transition-transform hover:scale-110 hover:bg-red-700"
            aria-label="Play video"
          >
            <Play className="ml-1 h-6 w-6" fill="currentColor" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}