import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductData } from '@/lib/api';
import { ProductPage } from '@/components/product-page';

interface PageProps {
  params: {
    lang: string;
  };
}

// Generate static params for ISR
export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'bn' },
  ];
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const response = await getProductData(params.lang);
    const { data } = response;

    return {
      title: data.title,
      description: data.description.replace(/<[^>]*>/g, ''), // Strip HTML tags
      openGraph: {
        title: data.title,
        description: data.description.replace(/<[^>]*>/g, ''),
        images: [
          {
            url: data.media.find(m => m.name === 'thumbnail')?.resource_value || '',
            width: 1200,
            height: 630,
            alt: data.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: data.title,
        description: data.description.replace(/<[^>]*>/g, ''),
        images: [data.media.find(m => m.name === 'thumbnail')?.resource_value || ''],
      },
    };
  } catch (error) {
    return {
      title: 'IELTS Course',
      description: 'Complete IELTS preparation course',
    };
  }
}

export default async function CoursePage({ params }: PageProps) {
  // Validate language parameter
  if (!['en', 'bn'].includes(params.lang)) {
    notFound();
  }

  try {
    const response = await getProductData(params.lang);
    
    if (response.code !== 200) {
      notFound();
    }

    return <ProductPage data={response.data} />;
  } catch (error) {
    console.error('Error fetching product data:', error);
    notFound();
  }
}

// Enable ISR
export const revalidate = 3600; // Revalidate every hour