export default function GroupePage() {
  const values = [
    { icon: 'fa-cogs', title: 'Technique', desc: "Maîtrise des métiers techniques et industriels avec un haut niveau d'exigence." },
    { icon: 'fa-microchip', title: 'Technologie', desc: 'Veille technologique permanente et adoption des solutions les plus innovantes.' },
    { icon: 'fa-pencil-ruler', title: 'Ingénierie', desc: 'Expertise en conception, étude et réalisation de projets complexes.' },
    { icon: 'fa-leaf', title: 'Environnement', desc: "Engagement fort pour le respect de l'environnement et le développement durable." },
    { icon: 'fa-shield', title: 'Sécurité', desc: 'Normes de sécurité strictes appliquées sur tous nos chantiers et interventions.' },
    { icon: 'fa-trophy', title: 'Qualité', desc: 'Démarche qualité rigoureuse pour des prestations haut de gamme.' },
  ];

  return (
    <div className="min-h-screen bg-dark pt-48 pb-20 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center w-full mt-12">
        <div className="text-center mb-14 animate-fade-in-up">
          <span className="text-primary/60 text-xs font-semibold uppercase tracking-[0.3em]">
            Notre identité
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-3 tracking-tight">
            Le Groupe
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto mt-5" />
        </div>

        <div className="max-w-4xl mx-auto text-center text-white/60 text-base md:text-lg leading-relaxed mb-16 space-y-4 animate-fade-in-up">
          <p>
            Dooke Corporation se distingue par l&apos;exceptionnelle diversité de ses compétences.
            Nous intervenons dans les domaines de la technique, de la technologie et de l&apos;ingénierie,
            offrant à nos clients une palette complète de services.
          </p>
          <p>
            Notre force réside dans notre capacité à mobiliser des équipes pluridisciplinaires
            pour répondre aux défis les plus complexes, tout en maintenant un niveau d&apos;exigence
            irréprochable en matière de qualité, de sécurité et de respect de l&apos;environnement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group bg-white/[0.03] border border-white/10 rounded-xl p-8 text-center hover:bg-white/[0.06] hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <i className={`fa ${v.icon} text-primary text-xl`}></i>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
