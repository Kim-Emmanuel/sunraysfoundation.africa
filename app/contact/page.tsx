import Banner from '@/components/Banner';
import ContactSection from '@/components/ContactSection';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Sun Rays Foundation',
  description: 'Get in touch with Sun Rays Foundation. Find contact information, office locations, and reach out for inquiries, support, or partnership opportunities. Empowering communities through sustainable development in South Sudan.',
  keywords: 'Sun Rays Foundation contact, get in touch, contact information, office locations, support inquiries, partnership opportunities, South Sudan, sustainable development, nonprofit organization, charity, community empowerment',
  // Open Graph / Facebook
  openGraph: {
    title: 'Contact Us | Sun Rays Foundation',
    description: 'Get in touch with Sun Rays Foundation. Find contact information, office locations, and reach out for inquiries, support, or partnership opportunities. Empowering communities through sustainable development in South Sudan.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sunraysfoundation.org/contact-us',
    siteName: 'Sun Rays Foundation',
    images: [
      {
        url: 'https://www.sunraysfoundation.org/images/contact-us-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sun Rays Foundation Contact Us page image',
      },
    ],
  },
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Sun Rays Foundation',
    description: 'Get in touch with Sun Rays Foundation. Find contact information, office locations, and reach out for inquiries, support, or partnership opportunities. Empowering communities through sustainable development in South Sudan.',
    site: '@sunraysfoundation',
    // images: '/logo.svg', // Update this line according to your needs
  },
};


export default function Page() {
  return <main>
    <Banner staticTitle="Contact Us" />

    <section className="section_container mt-2">
      <h2 className="text-46-normal font-bold mb-4 text-center">Contact Information</h2>
      <p className="customParagraph mb-10 text-center">For inquiries, support, or partnership opportunities, please get in touch with us using the contact information below.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-bold">Sun Rays Foundation</h3>
          <p className="customParagraph">
            Juba - South Sudan <br />
            Thongping, Scenius Hub Next to Winners Chapel.
          </p>
          <p className="customParagraph mb-4">Email: <Link href="mailto:info@sunraysfoundation.org" className="footer-links">Email Us</Link></p>
        </div>
      </div>
    </section>
    <ContactSection />
  </main>;
}
