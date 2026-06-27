import { presentation } from '@/data/content';

export default function PresentationPage() {
  return (
    <div className="min-h-screen bg-dark pt-48 pb-20 flex flex-col items-center">
      <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center text-center mt-12">
        <div className="text-center mb-14 animate-fade-in-up">
          <span className="text-primary/60 text-xs font-semibold uppercase tracking-[0.3em]">
            Qui sommes-nous
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-3 tracking-tight">
            {presentation.title}
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto mt-5" />
        </div>

        <div className="space-y-6 text-white/60 text-base md:text-lg leading-relaxed max-w-3xl mx-auto animate-fade-in-up text-center">
          {presentation.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
