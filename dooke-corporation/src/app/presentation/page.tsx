import { company } from '@/data/content';

export default function PresentationPage() {
  return (
    <div className="min-h-screen bg-dark pt-48 pb-20 flex flex-col items-center">
      <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center text-center mt-12">
        <div className="text-center mb-14 animate-fade-in-up">
          <span className="text-primary/60 text-xs font-semibold uppercase tracking-[0.3em]">
            Qui sommes-nous
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-3 tracking-tight">
            Presentation
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto mt-5" />
        </div>

        <div className="space-y-6 text-white/60 text-base md:text-lg leading-relaxed max-w-3xl mx-auto animate-fade-in-up text-center">
          <p>
            Fondée en <strong className="text-white font-semibold">{company.founded}</strong>, Dooke Corporation
            est une holding multisectorielle qui opère dans les domaines techniques, technologiques et de
            l&apos;ingénierie. Notre mission est de répondre aux besoins des professionnels en quête
            d&apos;excellence dans un monde en constante évolution.
          </p>
          <p>
            Nous mettons un point d&apos;honneur à fournir des services de haute qualité, en respectant
            les normes les plus strictes en matière de sécurité, d&apos;hygiène et de qualité. Notre équipe
            est composée de professionnels expérimentés, passionnés par leur métier et animés par une
            volonté constante d&apos;innovation.
          </p>
          <p>
            À travers nos deux divisions complémentaires&nbsp;: <strong className="text-white font-semibold">Dooke
            Works</strong> pour les activités techniques et industrielles, et{' '}
            <strong className="text-white font-semibold">Dooke Consulting</strong> pour les services
            numériques, nous couvrons un large éventail de secteurs d&apos;activité, offrant ainsi à nos
            clients une solution globale et intégrée.
          </p>
        </div>
      </div>
    </div>
  );
}
