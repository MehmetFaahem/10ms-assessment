import { ProductData } from '@/types/product';
import { YouTubeEmbed } from '@/components/ui/youtube-embed';
import { extractVideoId } from '@/lib/api';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  data: ProductData;
}

export function HeroSection({ data }: HeroSectionProps) {
  const trailerVideo = data.media.find(
    (item) => item.name === 'preview_gallery' && item.resource_type === 'video'
  );

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              {data.title}
            </h1>
            
            <div 
              className="text-lg text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                {data.cta_text.name}
              </Button>
              
              <div className="text-2xl font-bold text-blue-600">
                ৳1,000
              </div>
            </div>
          </div>

          {/* Trailer */}
          <div className="lg:pl-8">
            {trailerVideo && (
              <YouTubeEmbed
                videoId={extractVideoId(trailerVideo.resource_value)}
                title={data.title}
                thumbnail={trailerVideo.thumbnail_url}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}