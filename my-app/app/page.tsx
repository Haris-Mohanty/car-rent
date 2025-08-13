import { WorkingSteps } from '@/components/WorkingSteps';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PopularCarDeals from '@/components/PopularCarDeals';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <>
      <main className="bg-gray-50 min-h-screen">
        <Header />
        <Hero />
        <WorkingSteps />
        <PopularCarDeals />
        <WhyChooseUs />
      </main>
    </>
  );
}
