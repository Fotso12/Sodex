import { values } from '@/data/content';

export default function GroupePage() {
  return (
    <div className="min-h-screen pt-48 pb-20 bg-dark flex flex-col items-center">
      <div className="max-w-6xl mx-auto px-4 mt-12 flex flex-col items-center text-center w-full">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i className="fa fa-sitemap text-primary text-lg"></i>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-wide">Le Groupe</h1>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-gray-300 text-center text-lg leading-relaxed mb-16 space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <p>
            Dooke Works est la division technique et industrielle du groupe Dooke Corporation.
            Nous intervenons dans les métiers du bâtiment, de l&apos;industrie et des télécommunications
            avec un savoir-faire reconnu et une expertise de pointe.
          </p>
          <p>
            Notre force réside dans notre capacité à mobiliser des équipes techniques pluridisciplinaires
            pour répondre aux défis les plus complexes, tout en maintenant un niveau d&apos;exigence
            irréprochable en matière de qualité, de sécurité et de respect de l&apos;environnement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="bg-white/5 rounded-2xl p-8 text-center hover:bg-white/[0.07] transition-all hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <i className={`fa ${v.icon} text-primary text-xl`}></i>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{v.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
