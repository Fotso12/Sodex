import { presentation } from '@/data/content';

export default function PresentationPage() {
  return (
    <div className="min-h-screen pt-48 pb-20 bg-dark flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-4 mt-12 flex flex-col items-center text-center">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i className="fa fa-building text-primary text-lg"></i>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-wide">
            {presentation.title}
          </h1>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        <div className="text-gray-300 text-lg leading-relaxed space-y-6 animate-fade-in-up text-center" style={{ animationDelay: '0.2s' }}>
          {presentation.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p>
            Depuis sa création en {new Date().getFullYear() - 10}, Dooke Works s&apos;est imposée comme un acteur
            incontournable dans les domaines du bâtiment, de l&apos;industrie et des télécommunications
            sur le continent africain et en Europe.
          </p>
          <p>
            Nous mettons notre expertise technique au service de nos clients pour mener à bien
            leurs projets les plus ambitieux, dans le respect des délais, des budgets et des normes
            de qualité les plus exigeantes.
          </p>
        </div>
      </div>
    </div>
  );
}
