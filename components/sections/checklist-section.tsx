import { Checklist } from '@/types/product';
import { Card } from '@/components/ui/card';

interface ChecklistSectionProps {
  checklist: Checklist[];
}

export function ChecklistSection({ checklist }: ChecklistSectionProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {checklist.map((item) => (
            <Card key={item.id} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <img 
                  src={item.icon} 
                  alt="" 
                  className="h-8 w-8 flex-shrink-0"
                />
                <p className="text-sm font-medium text-gray-700 leading-tight">
                  {item.text}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}