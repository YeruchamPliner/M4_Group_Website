import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <main>
        <Hero />
        <About />
        <Features />
      </main>
    </div>
  );
}