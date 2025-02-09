import Banner from '@/components/Banner';
import { Gallery } from '@/components/Gallery';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Gallery | Sun Rays Foundation',
  description: 'Explore our photo and video gallery showcasing the impact of Sun Rays Foundation\'s work in South Sudan. See the faces and stories of the communities we empower through education and sustainable development.',
  keywords: 'Sun Rays Foundation, Gallery, photos, videos, South Sudan, education, sustainable development, community empowerment, impact, stories, non-profit, charity, humanitarian aid',
  // Open Graph / Facebook
  openGraph: {
    title: 'Gallery | Sun Rays Foundation',
    description: 'Explore our photo and video gallery showcasing the impact of Sun Rays Foundation\'s work in South Sudan. See the faces and stories of the communities we empower through education and sustainable development.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sunraysfoundation.org/gallery',
    siteName: 'Sun Rays Foundation',
    images: [
      {
        url: 'https://www.sunraysfoundation.org/images/gallery-og-image.jpg', // Update with your actual image URL
        width: 1200,
        height: 630,
        alt: 'Sun Rays Foundation Gallery image',
      },
    ],
  },
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery | Sun Rays Foundation',
    description: 'Explore our photo and video gallery showcasing the impact of Sun Rays Foundation\'s work in South Sudan. See the faces and stories of the communities we empower through education and sustainable development.',
    site: '@sunraysfoundation',  // Replace with your actual Twitter handle if different
    // image: 'https://www.sunraysfoundation.org/images/gallery-twitter-image.jpg', // Add Twitter specific image if needed.  Good practice to have a separate, optimized image for Twitter.
  },
};

export default function Page() {
  return (
    <main className="">
      <Banner staticTitle="Explore our gallery" />
      {/* Add your gallery component here */}
      <Suspense fallback={<div>Loading...</div>}>
      <Gallery/>
    </Suspense>
      
    </main>
  )
}