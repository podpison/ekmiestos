import { Hero } from "./hero/Hero";
import { Novelties } from "./novelties/Novelties";
import { IndividualFurniture } from './IndividualFurniture';
import { YearOfFoundation } from "./YearOfFoundation";
import { FactsAboutUs } from "./factsAboutUs/FactsAboutUs";
import { OurHistory } from './OurHistory';
import { LastPublications } from "./lastPublications/LastPublications";
import { HaveQuestions } from '../../ui/HaveQuestions';
import { OurPartners } from "./OurPartners";

export const MainPage: React.FC = () => {
  return <main>
    <Hero />
    <Novelties />
    <IndividualFurniture />
    <OurHistory />
    <YearOfFoundation />
    <LastPublications />
    <HaveQuestions />
    <FactsAboutUs />
    <OurPartners />
  </main>
};