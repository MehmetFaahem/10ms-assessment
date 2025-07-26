import { Section } from '@/types/product';
import { CheckCircle } from 'lucide-react';

interface PointersSectionProps {
  section: Section;
}

export function PointersSection({ section }: PointersSectionProps) {
  if (!section.values || section.values.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {section.name}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4 md:grid-cols-2">
            {section.values.map((pointer, index) => (
              <div key={pointer.id} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">
                  {pointer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}