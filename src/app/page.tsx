import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h2 className="text-3xl text-center text-yellow-500">music website with next.js and typeScript</h2>
      <HeroSection></HeroSection>
    </main>
  );
}
