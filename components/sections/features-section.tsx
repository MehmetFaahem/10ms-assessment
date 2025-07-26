import { Section } from '@/types/product';
import { Card } from '@/components/ui/card';

interface FeaturesSectionProps {
  section: Section;
}

export function FeaturesSection({ section }: FeaturesSectionProps) {
  if (!section.values || section.values.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {section.name}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {section.values.map((feature, index) => (
            <Card key={feature.id} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-blue-500">
              <div className="mb-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="mx-auto h-16 w-16 object-contain"
                />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.subtitle}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}