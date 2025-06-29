import PracticeCard from '@/components/PracticeCard';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#f9f9f2] to-[#007bff]">
      <h1 className="text-4xl font-bold text-[#007bff] mb-4">我的主页</h1>
      <p className="text-lg text-[#b3b3a7] mb-8">欢迎来到我的Next.js应用。</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <PracticeCard />
        <PracticeCard />
        <PracticeCard />
      </div>
    </div>
  );
}