import AboutUsSection from '@/components/AboutUsSection';
import Banner from '@/components/Banner';
import MissionAndVision from '@/components/MissionAndVision';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Sun Rays Foundation',
  description: 'Learn more about the mission, vision, and values of Sun Rays Foundation, and how we are empowering communities in South Sudan through sustainable development and educational resources.',
  keywords: 'Sun Rays Foundation, About Us, nonprofit organization, charity, South Sudan, education, sustainable development, community empowerment, mission, vision, values, underprivileged communities, humanitarian aid',
  // Open Graph / Facebook
  openGraph: {
    title: 'About Us | Sun Rays Foundation',
    description: 'Learn more about the mission, vision, and values of Sun Rays Foundation, and how we are empowering communities in South Sudan through sustainable development and educational resources.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sunraysfoundation.org/about-us',
    siteName: 'Sun Rays Foundation',
    images: [
      {
        url: 'https://www.sunraysfoundation.org/images/about-us-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sun Rays Foundation About Us page image',
      },
    ],
  },
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Sun Rays Foundation',
    description: 'Learn more about the mission, vision, and values of Sun Rays Foundation, and how we are empowering communities in South Sudan through sustainable development and educational resources.',
    site: '@sunraysfoundation',
    // images: '/logo.svg', // Update this line according to your needs
  },
};

export default function Page() {
return <main>
  <Banner staticTitle="About Us" />
  <AboutUsSection />
  <MissionAndVision />
</main>;
}
