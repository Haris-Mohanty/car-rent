import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <main className="bg-gray-50 min-h-screen">
        <Header />
        <Hero/>
      </main>
    </>
  );
}
