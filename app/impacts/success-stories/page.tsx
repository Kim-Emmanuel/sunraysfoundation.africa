import Banner from '@/components/Banner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Success Stories | Sun Rays Foundation',
  description: 'Read inspiring success stories about the individuals and communities impacted by Sun Rays Foundation\'s work in South Sudan. Learn how education and sustainable development are transforming lives.',
  keywords: 'Sun Rays Foundation, Success Stories, impact stories, South Sudan, education, sustainable development, community empowerment, testimonials, non-profit, charity, humanitarian aid, positive change',
  // Open Graph / Facebook
  openGraph: {
    title: 'Success Stories | Sun Rays Foundation',
    description: 'Read inspiring success stories about the individuals and communities impacted by Sun Rays Foundation\'s work in South Sudan. Learn how education and sustainable development are transforming lives.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sunraysfoundation.org/success-stories',
    siteName: 'Sun Rays Foundation',
    images: [
      {
        url: 'https://www.sunraysfoundation.org/images/success-stories-og-image.jpg', // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: 'Sun Rays Foundation Success Stories image',
      },
    ],
  },
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Success Stories | Sun Rays Foundation',
    description: 'Read inspiring success stories about the individuals and communities impacted by Sun Rays Foundation\'s work in South Sudan. Learn how education and sustainable development are transforming lives.',
    site: '@sunraysfoundation', // Replace with your actual Twitter handle if different
    // image: 'https://www.sunraysfoundation.org/images/success-stories-twitter-image.jpg', // Add Twitter specific image, best practice
  },
};

export default function Page() {
  return (
    <main className="">
      <Banner staticTitle="Success Stories" />
      {/* Add your gallery component here */}
      
    </main>
  )
}