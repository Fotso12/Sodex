import { clients } from '@/data/content';

export default function ReferencesPage() {
  return (
    <div className="min-h-screen pt-48 pb-20 bg-dark flex flex-col items-center">
      <div className="max-w-6xl mx-auto px-4 mt-12 flex flex-col items-center text-center w-full">
        <div className="text-center mb-14 animate-fade-in">
          <span className="text-primary font-heading font-semibold text-xs uppercase tracking-[0.25em]">
            Ils nous font confiance
          </span>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
            Nos references
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded" />
        </div>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-14 animate-fade-in-up text-base md:text-lg" style={{ animationDelay: '0.2s' }}>
          Nous sommes fiers de compter parmi nos clients de nombreuses entreprises et organisations
          qui nous font confiance pour la realisation de leurs projets digitaux.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clients.map((client) => (
            <div
              key={client}
              className="bg-gray/20 border border-white/5 rounded-xl h-24 flex items-center justify-center p-4 hover:bg-gray/30 hover:border-primary/20 transition-all duration-300"
            >
              <span className="text-gray-400 text-sm font-medium text-center">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
