import { values } from '@/data/content';

export default function GroupePage() {
  return (
    <div className="min-h-screen pt-48 pb-20 bg-dark flex flex-col items-center">
      <div className="max-w-6xl mx-auto px-4 mt-12 flex flex-col items-center text-center w-full">
        <div className="text-center mb-14 animate-fade-in">
          <span className="text-primary font-heading font-semibold text-xs uppercase tracking-[0.25em]">
            Notre identite
          </span>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
            Le Groupe
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded" />
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up space-y-4" style={{ animationDelay: '0.2s' }}>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Dooke Consulting est la division numerique du groupe Dooke Corporation.
            Nous intervenons dans les metiers du logiciel, du web et du mobile
            avec un savoir-faire reconnu et une expertise de pointe.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Notre force reside dans notre capacite a mobiliser des equipes pluridisciplinaires
            pour repondre aux defis techniques les plus complexes, tout en maintenant un niveau
            d&apos;exigence irreprochable en matiere de qualite et de satisfaction client.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="bg-gray/30 border border-white/5 rounded-xl p-8 text-center hover:bg-gray/40 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:border-primary transition-all">
                <i className={`fa ${v.icon} text-primary text-xl`}></i>
              </div>
              <h3 className="text-white font-heading font-bold text-lg mb-3">{v.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
