import { clients } from '@/data/content';

export default function ReferencesPage() {
  return (
    <div className="min-h-screen pt-48 pb-20 bg-dark flex flex-col items-center">
      <div className="max-w-6xl mx-auto px-4 mt-12 flex flex-col items-center text-center w-full">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i className="fa fa-star text-primary text-lg"></i>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-wide">Nos r&eacute;f&eacute;rences</h1>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Nous sommes fiers de compter parmi nos clients de nombreuses entreprises et organisations
          qui nous font confiance pour la r&eacute;alisation de leurs projets techniques et industriels.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clients.map((client, i) => (
            <div
              key={client}
              className="bg-white/5 rounded-2xl h-24 flex items-center justify-center p-4 hover:bg-white/[0.07] transition-all hover:-translate-y-0.5 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              <span className="text-gray-400 text-sm font-medium text-center">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
