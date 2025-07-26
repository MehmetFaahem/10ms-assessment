import { ApiResponse } from '@/types/product';

export async function getProductData(lang: string = 'en'): Promise<ApiResponse> {
  try {
    const response = await fetch(
      `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
      {
        headers: {
          'X-TENMS-SOURCE-PLATFORM': 'web',
        },
        next: { revalidate: 3600 }, // ISR: revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch product data: ${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('API fetch error:', error);
    throw new Error(`Failed to fetch product data: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export function extractVideoId(url: string): string {
  // Extract YouTube video ID from various URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : url;
}