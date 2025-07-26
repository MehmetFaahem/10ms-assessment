import { Section } from '@/types/product';

interface AboutSectionProps {
  section: Section;
}

export function AboutSection({ section }: AboutSectionProps) {
  if (!section.values || section.values.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {section.name}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {section.values.map((item, index) => (
            <div key={item.id} className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: item.title }} />
              <div 
                className="mt-4 text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.description }} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}