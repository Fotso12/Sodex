import { clients } from '@/data/content';

export default function ReferencesPage() {
  return (
    <div className="min-h-screen bg-dark pt-48 pb-20 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center w-full mt-12">
        <div className="text-center mb-14 animate-fade-in-up">
          <span className="text-primary/60 text-xs font-semibold uppercase tracking-[0.3em]">
            Ils nous font confiance
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-3 tracking-tight">
            Nos références
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto mt-5" />
        </div>

        <p className="text-white/50 text-center max-w-3xl mx-auto mb-14 text-base md:text-lg leading-relaxed animate-fade-in-up">
          Nous sommes fiers de compter parmi nos clients de nombreuses entreprises et organisations
          qui nous font confiance pour la réalisation de leurs projets techniques et numériques.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full max-w-6xl">
          {clients.map((client) => (
            <div
              key={client}
              className="group bg-white/[0.03] border border-white/10 rounded-xl h-24 flex items-center justify-center p-4 hover:bg-white/[0.06] hover:border-primary/30 transition-all duration-300"
            >
              <span className="text-white/30 group-hover:text-white/60 text-sm font-medium text-center transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
