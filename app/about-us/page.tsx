import AboutUsSection from '@/components/AboutUsSection';
import Banner from '@/components/Banner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are | Sunrays Foundation – Compassionate Community-Driven Change',
  description: 'Learn about Sunrays Foundation’s mission, vision, and teamwork to empower vulnerable children, youth, women, and people with disabilities in East Africa.',
  keywords: 'Sun Rays Foundation, About Us, nonprofit organization, charity, South Sudan, education, sustainable development, community empowerment, mission, vision, values, underprivileged communities, humanitarian aid',
  // Open Graph / Facebook
  openGraph: {
    title: 'Who We Are | Sunrays Foundation – Compassionate Community-Driven Change',
    description: 'Learn about Sunrays Foundation’s mission, vision, and teamwork to empower vulnerable children, youth, women, and people with disabilities in East Africa.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sunraysfoundation.org/about-us',
    siteName: 'Sunrays Foundation',
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
    title: 'Who We Are | Sunrays Foundation – Compassionate Community-Driven Change',
    description: 'Learn about Sunrays Foundation’s mission, vision, and teamwork to empower vulnerable children, youth, women, and people with disabilities in East Africa.',
    site: '@sunraysfoundation',
    // images: '/logo.svg', // Update this line according to your needs
  },
} 

export default function Page() {
return <main>
  <Banner staticTitle="About Us" />
  <AboutUsSection />
</main>;
}
