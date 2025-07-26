import { Section } from '@/types/product';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

interface FeatureExplanationsSectionProps {
  section: Section;
}

export function FeatureExplanationsSection({ section }: FeatureExplanationsSectionProps) {
  if (!section.values || section.values.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {section.name}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {section.values.map((feature, index) => (
            <Card key={feature.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={feature.file_url}
                  alt={feature.title}
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <ul className="space-y-2">
                  {feature.checklist.map((item: string, itemIndex: number) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}