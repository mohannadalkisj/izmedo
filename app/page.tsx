import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import AnimatedList from './components/test';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <Header />
      <Hero />
      <Services />
      <Clients />
      <Gallery />
      <AnimatedList/>
      <Footer />
    </main>
  );
}
