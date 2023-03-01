import { Hero } from "./hero/Hero";
import { Novelties } from "./novelties/Novelties";
import { IndividualFurniture } from './individualFurniture/IndividualFurniture';
import { YearOfFoundation } from "./YearOfFoundation";
import { FactsAboutUs } from "./factsAboutUs/FactsAboutUs";

export const MainPage: React.FC = () => {
  return <main>
    <Hero />
    <Novelties />
    <IndividualFurniture />
    <YearOfFoundation />
    <FactsAboutUs />
  </main>
};