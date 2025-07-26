import { Section } from '@/types/product';
import { Card } from '@/components/ui/card';

interface InstructorSectionProps {
  section: Section;
}

export function InstructorSection({ section }: InstructorSectionProps) {
  if (!section.values || section.values.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {section.name}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
          {section.values.map((instructor, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="mx-auto h-32 w-32 rounded-full object-cover border-4 border-blue-100"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {instructor.name}
              </h3>
              
              <p className="text-blue-600 font-medium mb-4">
                {instructor.short_description}
              </p>
              
              <div 
                className="text-sm text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: instructor.description }}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}