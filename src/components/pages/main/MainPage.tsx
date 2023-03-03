import { Hero } from "./hero/Hero";
import { Novelties } from "./novelties/Novelties";
import { IndividualFurniture } from './IndividualFurniture';
import { YearOfFoundation } from "./YearOfFoundation";
import { FactsAboutUs } from "./factsAboutUs/FactsAboutUs";
import { OurHistory } from './OurHistory';
import { LastPublications } from "./lastPublications/LastPublications";

export const MainPage: React.FC = () => {
  return <main>
    <Hero />
    <Novelties />
    <IndividualFurniture />
    <OurHistory />
    <YearOfFoundation />
    <LastPublications />
    <FactsAboutUs />
  </main>
};