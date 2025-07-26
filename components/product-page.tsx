import { ProductData } from '@/types/product';
import { HeroSection } from '@/components/sections/hero-section';
import { ChecklistSection } from '@/components/sections/checklist-section';
import { InstructorSection } from '@/components/sections/instructor-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { PointersSection } from '@/components/sections/pointers-section';
import { FeatureExplanationsSection } from '@/components/sections/feature-explanations-section';
import { AboutSection } from '@/components/sections/about-section';

interface ProductPageProps {
  data: ProductData;
}

export function ProductPage({ data }: ProductPageProps) {
  // Sort sections by order_idx
  const sortedSections = [...data.sections].sort((a, b) => a.order_idx - b.order_idx);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection data={data} />
      <ChecklistSection checklist={data.checklist} />
      
      {sortedSections.map((section) => {
        switch (section.type) {
          case 'instructors':
            return <InstructorSection key={section.type} section={section} />;
          case 'features':
            return <FeaturesSection key={section.type} section={section} />;
          case 'pointers':
            return <PointersSection key={section.type} section={section} />;
          case 'feature_explanations':
            return <FeatureExplanationsSection key={section.type} section={section} />;
          case 'about':
            return <AboutSection key={section.type} section={section} />;
          default:
            return null;
        }
      })}
    </div>
  );
}