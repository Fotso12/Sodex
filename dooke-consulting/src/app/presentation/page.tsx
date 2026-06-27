import { presentation } from '@/data/content';

export default function PresentationPage() {
  return (
    <div className="min-h-screen pt-48 pb-20 bg-dark flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-4 mt-12 flex flex-col items-center text-center">
        <div className="text-center mb-14 animate-fade-in">
          <span className="text-primary font-heading font-semibold text-xs uppercase tracking-[0.25em]">
            Qui sommes-nous
          </span>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
            {presentation.title}
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded" />
        </div>

        <div className="space-y-6 animate-fade-in-up text-center" style={{ animationDelay: '0.2s' }}>
          {presentation.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-300 text-base md:text-lg leading-relaxed">
              {p}
            </p>
          ))}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Depuis sa creation, Dooke Consulting s&apos;est imposee comme un acteur
            incontournable du numerique en Afrique et en Europe, accompagnant ses clients
            dans leur transformation digitale avec des solutions innovantes et performantes.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Nous mettons notre expertise technique au service de nos clients pour concevoir,
            developper et deployer des applications qui repondent a leurs besoins specifiques,
            dans le respect des delais, des budgets et des normes de qualite les plus exigeantes.
          </p>
        </div>
      </div>
    </div>
  );
}
