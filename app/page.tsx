import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Artists from '@/components/Artists';
import Gallery from '@/components/Gallery';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Reviews from '@/components/Reviews';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Divider from '@/components/Divider';
import { studio } from '@/data/studio';

// Balisage des questions-réponses, sur cette page seulement : c'est ici qu'elles s'affichent
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: studio.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Divider />
        <Artists />
        <Divider />
        <Gallery />
        <Divider />
        <Services />
        <Divider />
        <Reviews />
        <Divider />
        <Process />
        <Divider />
        <Faq />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
